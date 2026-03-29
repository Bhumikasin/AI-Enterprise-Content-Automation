function generate(){
    let topic = document.getElementById("topic").value;
    
    document.getElementById("output").innerHTML =
    `
    <h3>Generated Content:</h3>
    <p>AI generated enterprise content about <b>${topic}</b>.</p>
    
    <p>✅ Compliance Check Passed</p>
    <p>🌍 Localization Complete</p>
    <p>🚀 Ready for Publishing</p>
    `;
    }