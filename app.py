from flask import Flask, request


app = Flask(__name__, static_url_path='/', static_folder='PYTHON_PROJEKT')

@app.route("/")
def hello_world():
    return "Hello Python Projekt!"

@app.route("/sentiment", methods=["GET"])
def test():
text = request.args.get('text')
if (text == ""):
    return "Please use text parameter in GET URL"
#... do service calculation, run inference
return result


# Username
@app.route('/user/<username>')
def show_user_profile(username):
# show the user profile for that user
return f'User {escape(username)}'

#Post
@app.route('/post/<int:post_id>')
def show_post(post_id):
# show the post with the given id, the id is an integer
return f'Post {post_id}'

#Subpath
@app.route('/path/<path:subpath>')
def show_subpath(subpath):
# show the subpath after /path/
return f'Subpath {escape(subpath)}'