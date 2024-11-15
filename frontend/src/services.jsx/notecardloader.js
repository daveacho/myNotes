import { getMenu } from "./api";

// export async function loader() {
//     const notes = await getMenu();
//     return notes;
//   }

export async function loader() {
    console.log("Loader function called"); // Log when the loader starts
    
    try {
        // Example of fetching data
        const notes = await getMenu();
        return notes;
        
    } catch (error) {
        console.error("Failed to load data:", error); // Log any errors
        return null; // Return null to avoid errors in the loader
    }
}
