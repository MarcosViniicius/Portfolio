from flask import Flask, render_template, redirect

app = Flask(__name__)

@app.route("/", methods=["GET"])
def homepage():
    return render_template('homepage.html', title="Home")

@app.route("/projects", methods=["GET"])
def projects():
    return render_template('projects.html', title="Projetos")

@app.route("/certifications", methods=["GET"])
def certifications():
    return render_template('certifications.html', title="Certificações")

@app.route("/send_email", methods=["GET"])
def send_email():
    # Redireciona para mailto sem expor o e-mail no HTML afim de evitar spam de bots automáticos
    email = "marcosvinicius.lucena27@gmail.com"
    return redirect(f"mailto:{email},?subject=Contato pelo Portfólio&body=Olá, gostaria de saber mais sobre...")

@app.route("/send_message", methods=["GET"])
def send_message():
    # Redireciona para WhatsApp sem expor o número no HTML afim de evitar spam de bots automáticos
    phone_number = "5584987592270"
    return redirect(f"https://wa.me/{phone_number}?text=Olá, vim do seu portfolio, gostaria de saber mais sobre...")

if __name__ == "__main__":
    app.run(debug=True)