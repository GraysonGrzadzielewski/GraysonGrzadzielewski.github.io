import jinja2
import json
from pathlib import Path

# Should be run from the top of the repo
source = Path('./src')
public = Path('./public')
values = json.loads(open('./src/values.json', 'r').read())

environment = jinja2.Environment(loader=jinja2.FileSystemLoader("src"))
template = environment.get_template('index.html')

content = template.render(values)
with open(public / 'index.html', 'w') as index_out:
    index_out.write(content)
