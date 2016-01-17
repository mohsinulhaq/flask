from mohsinulhaq import app, render_template


@app.errorhandler(404)
def not_found(error):
    return render_template('404.html'), 404


@app.route('/')
def index():
    return render_template('index.html', title='Mohsin Ul Haq', styles=['index.css'], scripts=['index.js'])


@app.route('/autocomplete')
def autocomplete():
    return render_template('autocomplete.html', title='Autocomplete', styles=['autocomplete.css'], scripts=['autocomplete.js'])


@app.route('/radio')
def radio():
    return render_template('radio.html', title='Custom Radio', styles=['radio.css'], scripts=[])


@app.route('/regex')
def regex():
    return render_template('regex.html', title='Regex Validation', styles=['regex.css'], scripts=['regex.js'])


@app.route('/facebook')
def facebook():
    return render_template('facebook.html', title='Facebook', styles=['facebook.css'], scripts=['fbsdksetup.js', 'facebook.js'])


@app.route('/pagination')
def pagination():
    return render_template('pagination.html', title='Pagination', styles=['pagination.css'], scripts=['pagination.js'])


@app.route('/about')
def about():
    return render_template('about.html', title='About Me', styles=[], scripts=[])


@app.route('/test')
def test():
    return render_template('test.html', title='Test', styles=['test.css'], scripts=['test.js'])
