import json
import urllib.request

data = json.load(open('../../planes.json'))

for card in data['cards']:
    # print(card['id'])
    # print(card['imageUrl'])
    # urllib.request.urlretrieve('http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=423590&type=card', 'img/test.png')
    urllib.request.urlretrieve(card['imageUrl'], card['id'] +'.png')
