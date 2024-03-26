
export async function getAuthors() {
    return [
        {
            id: 1,
            name: "Jason"
        },
        {
            id: 2,
            name: "Mary"
        },
        {
            id: 3,
            name: "Bob"
        },
    ]
}

export async function getSports() {
    return [
        {
            id: 1,
            sport: "soccer"
        },
        {
            id: 2,
            sport: "baseball"
        },
        {
            id: 3,
            sport: "swimming"
        },
    ]
}

export async function getBlogs() {
    return [
        {
            author: "Dwight Eisenhower",
            date: "1-20-1960",
            title: "My Farewell Speech",
            body: "text x 1",
            link: "www.Ike.com"

        },
        {
            author: "George Washington",
            date: "3-10-1776",
            title: "Are We Free Yet?",
            body: "text x 2",
            link: "www.whatIsALink.com"
        },
        {
            author: "Abraham Lincoln",
            date: "2-3-1860",
            title: "How I Plan to Spend Retirement",
            body: "text x 3",
            link: "amIOkay.com"
        },
    ];

}

export async function getSportsEntries() {
    return [
        {
            sport: "Swimming",
            date: "6-20-1989",
            location: "Nebraska"
        },
        {
            sport: "Curling",
            date: "3-14-1956",
            location: "Minnesota"
        },
        {
            sport: "Tennis",
            date: "9-20-2010",
            location: "Washington"
        }, 
    ];

}


