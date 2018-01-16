var request = new XMLHttpRequest();
            
request.open('GET', '../data/directory.json', true);
request.responseType = 'json';
request.send(null);

request.onload = function() {
    parseData(request.response);

}

function parseData(data) {
    var directory = document.getElementById('directory');

    for (var i = 0; i < data.length; i++) {

        var card = document.createElement('li');
        card.className = 'card';
        var cardInner = document.createElement('div');
        cardInner.className = 'cardInner';

        var heading = document.createElement('h2');

        heading.textContent = data[i].name;

        cardInner.appendChild(heading);

        addLocation(cardInner, data[i].location);
        addWebsite(cardInner, data[i].website);
        addCategories(cardInner, data[i].categories);

        card.appendChild(cardInner);

        directory.appendChild(card);
    }
}

function addLocation(card, location) {
    if (location != ''){
        var addressDetail = document.createElement('p');
        addressDetail.classList = "location";
        addressDetail.textContent = location;
        card.appendChild(addressDetail);
    }
}

function addWebsite(card, website) {
    if (website != '') {
        var websiteDetail = document.createElement('p');
        websiteDetail.className = "website"
        var websiteLink = document.createElement('a');
        websiteLink.textContent = "Website";
        websiteLink.href = website;
        websiteDetail.appendChild(websiteLink);
        card.appendChild(websiteDetail);
    }                
}

function addCategories(card, categories) {
    var categoryList = document.createElement('ul');
    categoryList.className = "categories";
    for (var j = 0; j < categories.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = categories[j];
        categoryList.appendChild(listItem);
    }
    card.appendChild(categoryList);
}