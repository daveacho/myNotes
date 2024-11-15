const API_URL = "http://127.0.0.1:8000"
export async function getNotes() {
    const res = await fetch(`${API_URL}/notes/`);
  
    // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
    if (!res.ok) throw Error("Failed getting menu");
  
    const { data } = await res.json();
    console.log("Data fetched successfully:", data); // Log fetched data
    return data;
  }

 
