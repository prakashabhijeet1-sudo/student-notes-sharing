const API_URL = "http://localhost:5000/notes";

async function fetchNotes() {

    const response = await fetch(API_URL);

    const notes = await response.json();

    const container = document.getElementById("notesContainer");

    container.innerHTML = "";

    notes.forEach(note => {

        container.innerHTML += `

            <div class="note">

                <h3>${note.title}</h3>

                <p>
                    <strong>Subject:</strong> ${note.subject}
                </p>

                <p>
                    <strong>Author:</strong> ${note.author}
                </p>

            </div>

        `;

    });

}

async function uploadNote() {

    const title = document.getElementById("title").value;

    const subject = document.getElementById("subject").value;

    const author = document.getElementById("author").value;

    if (!title || !subject || !author) {

        alert("Please fill all fields");

        return;

    }

    await fetch(API_URL, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            title,
            subject,
            author
        })

    });

    alert("Note Uploaded Successfully");

    fetchNotes();

}

fetchNotes();