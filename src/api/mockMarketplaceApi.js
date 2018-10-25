import delay from "./delay";

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const marketplaceTemplates = [
    {
        id: 1,
        title: "Macbook Pro",
        price: 45,
        dateCreated: "2017-01-25",
        dateUpdated: "2017-03-17",
        image: "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/alotan-free-template.jpg",
        live: true,
        author: "Jesse Atworth",
        category: "Computers",
        description: "Apple macbook pro in mid condition"
    },
    {
        id: 2,
        title: "Matt Ryan Jersey",
        price: 55,
        dateCreated: "2018-01-25",
        dateUpdated: "2018-04-10",
        image: "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/charity2-free-template.jpg",
        live: true,
        author: "",
        category: "Clothing",
        description: "Brand New Atlanta Falcons Matt Ryan Jersey"
    },
    {
        id: 3,
        title: "Water Gun",
        price: 25,
        dateCreated: "2017-01-25",
        dateUpdated: "2017-03-17",
        image: "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/advent-free-template.jpg",
        live: true,
        author: "",
        category: "Toys",
        description: "This template is catered to a sales that occur one time. Customers love a page that has style to it. This theme shows that you have a big organization even if you are running a two man shop"
    },
    {
        id: 4,
        title: "Lenovo T-450",
        price: 30,
        dateCreated: "2017-01-25",
        dateUpdated: "2017-03-17",
        image: "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/transcend-free-template-1.jpg",
        live: false,
        author: "",
        category: "Computers",
        description: "Used Lenovo Thinkpad T-450 Laptop"
    },
    {
        id: 5,
        title: "Toshiba Satellite",
        price: 25,
        dateCreated: "2017-01-25",
        dateUpdated: "2017-03-17",
        image: "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/skwela-free-template.jpg",
        live: true,
        author: "",
        category: "Computer",
        description: "Brand New Toshiba laptop"
    },
    {
        id: 6,
        title: "Xbox One",
        price: 35,
        dateCreated: "2017-01-25",
        dateUpdated: "2017-03-17",
        image: "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/charity2-free-template.jpg",
        live: false,
        author: "",
        category: "Toys",
        description: "New Xbox One with one controller and game"
    },
    {
        id: 7,
        title: "Levi Jeans",
        price: 45,
        dateCreated: "2017-01-25",
        dateUpdated: "2017-03-17",
        image: "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/advent-free-template.jpg",
        live: true,
        author: "",
        category: "Ecommerce",
        description: "New levi jeans"
    },
    {
        id: 8,
        title: "Hp Desktop Computer",
        price: 55,
        dateCreated: "2018-01-25",
        dateUpdated: "2018-04-10",
        image: "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/travelix-free-template.jpg",
        live: true,
        author: "",
        category: "Computer",
        desciption: ""
    },
    {
        id: 9,
        title: "Fancy Hat",
        price: 25,
        dateCreated: "2017-01-25",
        dateUpdated: "2017-03-17",
        image: "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/luxehotel-free-template.jpg",
        live: true,
        author: "",
        category: "Clothing",
        description: ""
    },
    {
        id: 10,
        title: "Fancy Shirt",
        price: 30,
        dateCreated: "2017-01-25",
        dateUpdated: "2017-03-17",
        image: "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/charity2-free-template.jpg",
        live: false,
        author: "",
        category: "Clothing",
        description: ""
    },
    {
        id: 11,
        title: "Playstation 4",
        price: 25,
        dateCreated: "2017-01-25",
        dateUpdated: "2017-03-17",
        image: "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/alotan-free-template.jpg",
        live: true,
        author: "",
        category: "Toys",
        description: ""
    },
    {
        id: 12,
        title: "Samsung Monitor",
        price: 35,
        dateCreated: "2017-01-25",
        dateUpdated: "2017-03-17",
        image: "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/advent-free-template.jpg",
        live: false,
        author: "",
        category: "Computers",
        description: ""
    },
    {
        id: 13,
        title: "Lenovo Monitor",
        price: 45,
        dateCreated: "2017-01-25",
        dateUpdated: "2017-03-17",
        image: "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/travelix-free-template.jpg",
        live: true,
        author: "",
        category: "Computers",
        description: ""
    },
    {
        id: 14,
        title: "Power Ranger Action Figure",
        price: 55,
        dateCreated: "2018-01-25",
        dateUpdated: "2018-04-10",
        image: "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/skwela-free-template.jpg",
        live: true,
        author: "",
        category: "toys",
        description: ""
    },
    {
        id: 15,
        title: "Asus Laptop",
        price: 25,
        dateCreated: "2017-01-25",
        dateUpdated: "2017-03-17",
        image: "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/horseclub-free-template.jpg",
        live: true,
        author: "",
        category: "computers",
        description: ""
    },
    {
        id: 16,
        title: "Nike shirt",
        price: 30,
        dateCreated: "2017-01-25",
        dateUpdated: "2017-03-17",
        image: "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/advent-free-template.jpg",
        live: false,
        author: "",
        category: "Clothing",
        description: ""
    },
    {
        id: 17,
        title: "Nike Shoes",
        price: 25,
        dateCreated: "2017-01-25",
        dateUpdated: "2017-03-17",
        image: "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/alotan-free-template.jpg",
        live: true,
        author: "",
        category: "Clothing",
        description: ""
    },
    {
        id: 18,
        title: "Jordan Shoe",
        price: 35,
        dateCreated: "2017-01-25",
        dateUpdated: "2017-03-17",
        image: "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/skwela-free-template.jpg",
        live: false,
        author: "",
        category: "clothing",
        description: ""
    }

];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (marketplaceTemplate) => {
    return replaceAll(marketplaceTemplate.title, " ", "-");
};

class MarketplaceTemplateApi {
    static getAllMarketplaceTemplates() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign([], marketplaceTemplates));
            }, delay);
        });
    }

    static saveMarketplaceTemplate(marketplaceTemplate) {
        marketplaceTemplate = Object.assign({}, marketplaceTemplate); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minMarketplaceTemplateTitleLength = 1;
                if (marketplaceTemplate.title.length < minMarketplaceTemplateTitleLength) {
                    reject(`Title must be at least ${minMarketplaceTemplateTitleLength} characters.`);
                }

                if (marketplaceTemplate.id) {
                    // eslint-disable-next-line
                    const existingMarketplaceTemplateIndex = marketplaceTemplates.findIndex(a => a.id == marketplaceTemplate.id);
                    marketplaceTemplates.splice(existingMarketplaceTemplateIndex, 1, marketplaceTemplate);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref"s for new video in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    marketplaceTemplate.id = generateId(marketplaceTemplate);
                    //marketplaceTemplate.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
                    marketplaceTemplates.push(marketplaceTemplate);
                }

                resolve(marketplaceTemplate);
            }, delay);
        });
    }

    static deleteMarketplaceTemplate(marketplaceTemplateId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const indexOfMarketplaceTemplateToDelete = marketplaceTemplates.findIndex(marketplaceTemplate => {
                    // eslint-disable-next-line
                    marketplaceTemplate.id == marketplaceTemplateId;
                });
                marketplaceTemplates.splice(indexOfMarketplaceTemplateToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default MarketplaceTemplateApi;