function sendEmail() {
    try {
        Email.send({
            Host: "smtp.jordansdev.com",
            Username: "kongboardstudios@gmail.com",
            Password: "bestpassword124$",
            To: 'exposmart2002@gmail.com',
            From: "kongboardstudios@gmail.com",
            Subject: 'asd',
            Body: '123'
        }).then(
            message => alert(message)
        );
    } catch {
        console.log('fuck')
    }


};