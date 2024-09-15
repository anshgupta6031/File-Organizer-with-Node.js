



import fs from "fs/promises";
import fsn from "fs";
import path from "path";


async function organizeFiles(basepath) {
    try {
        const files = await fs.readdir(basepath);
        
        for (const file of files) {
            const extension = path.extname(file).slice(1);                  // Get the file extension
            
            if ((file !== "index.js") && (file !== "package.json") && (file !== "readme.md") && extension) {
                console.log("Running for:", file);

                const targetDir = path.join(basepath, extension);
                
                if (!fsn.existsSync(targetDir)) {
                    await fs.mkdir(targetDir);
                }
                
                await fs.rename(path.join(basepath, file), path.join(targetDir, file));
            }
        }
        
        console.log("Files organized successfully!");
    }
    
    catch (error) {
        console.error("Error:", error);
    }
}


const basepath = "E:\\Web D\\9_Projects\\1";
organizeFiles(basepath);
