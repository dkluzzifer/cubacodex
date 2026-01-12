use serde::{Deserialize, Serialize};
use tauri::command;
use std::fs;
use std::path::Path;

#[derive(Serialize, Deserialize)]
pub struct FileInfo {
    pub name: String,
    pub path: String,
    pub is_file: bool,
    pub is_dir: bool,
}

#[command]
pub async fn read_file(path: String) -> Result<String, String> {
    fs::read_to_string(&path).map_err(|e| e.to_string())
}

#[command]
pub async fn write_file(path: String, content: String) -> Result<(), String> {
    let parent = Path::new(&path)
        .parent()
        .ok_or_else(|| String::from("Invalid path"))?;
    
    if !parent.exists() {
        fs::create_dir_all(parent).map_err(|e| e.to_string())?;
    }
    
    fs::write(&path, content).map_err(|e| e.to_string())
}

#[command]
pub async fn read_directory(path: String) -> Result<Vec<FileInfo>, String> {
    let entries = fs::read_dir(&path).map_err(|e| e.to_string())?;
    let mut files = Vec::new();
    
    for entry in entries {
        let entry = entry.map_err(|e| e.to_string())?;
        let metadata = entry.metadata().map_err(|e| e.to_string())?;
        let file_path = entry.path();
        
        files.push(FileInfo {
            name: file_path.file_name()
                .and_then(|n| n.to_str())
                .unwrap_or("unknown")
                .to_string(),
            path: file_path.to_string_lossy().to_string(),
            is_file: metadata.is_file(),
            is_dir: metadata.is_dir(),
        });
    }
    
    Ok(files)
}

#[command]
pub async fn open_file_dialog() -> Result<Option<String>, String> {
    use tauri_plugin_dialog::{DialogExt, FileDialogBuilder};
    
    let file_path = FileDialogBuilder::new()
        .set_title("Abrir archivo")
        .pick_file();
    
    Ok(file_path.map(|p| p.to_string_lossy().to_string()))
}

#[command]
pub async fn save_file_dialog(default_path: Option<String>) -> Result<Option<String>, String> {
    use tauri_plugin_dialog::{DialogExt, FileDialogBuilder};
    
    let mut builder = FileDialogBuilder::new();
    
    if let Some(path) = default_path {
        builder = builder.set_file_name(&path);
    }
    
    builder = builder.set_title("Guardar archivo");
    
    let file_path = builder.save_file();
    
    Ok(file_path.map(|p| p.to_string_lossy().to_string()))
}
