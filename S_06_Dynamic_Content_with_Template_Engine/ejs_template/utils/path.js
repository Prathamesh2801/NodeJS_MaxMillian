import { fileURLToPath } from 'url';
import path from 'path';

// Convert current file URL to file path
const __filename = fileURLToPath(import.meta.url);

// Get current directory path
const __dirname = path.dirname(__filename);

//  Root directory: goes one level up if utils folder is inside project
const rootDir = path.dirname(__dirname);

// Export the root directory
export default rootDir;
