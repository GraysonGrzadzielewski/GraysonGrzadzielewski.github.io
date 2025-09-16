import jinja2
import markdown
import json
from pathlib import Path

# Should be run from the top of the repo
source = Path('./src')
public = Path('./public')
values = json.loads(open('./src/values.json', 'r').read())

environment = jinja2.Environment(loader=jinja2.FileSystemLoader("src"))
template = environment.get_template('index.html')

values['home_content'] = markdown.markdown(open('./src/assets/index_home.md', 'r').read())

content = template.render(values)
with open(public / 'index.html', 'w') as index_out:
    index_out.write(content)