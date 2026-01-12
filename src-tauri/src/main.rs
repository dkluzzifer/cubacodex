pub mod commands;

use commands::{read_file, write_file, read_directory, open_file_dialog, save_file_dialog};

fn main() {
    commands::run()
}
