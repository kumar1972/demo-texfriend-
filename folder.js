async function selectTexfriendFolder() {
    try {
        const handle = await window.showDirectoryPicker();
        console.log("Selected folder:", handle.name);
        
        // லோக்கல் ஸ்டோரேஜில் சேமித்தல்
        localStorage.setItem("texfriend_selected_folder", handle.name);
        
        // கிளவுட் ஸ்டோரேஜ் அல்லது சிங்க் பகுதிக்கான செயல்பாடு
        if (typeof syncToCloudStorage === "function") {
            await syncToCloudStorage(handle);
        }
        
        alert("Folder successfully selected & synchronized: " + handle.name);
        return handle;
    } catch (err) {
        console.error("Folder selection or cloud sync failed", err);
    }
}
