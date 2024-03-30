const blogsDb = [
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

export async function getBlogEntries() {
    return blogsDb
}

// fills dropdown with current list of unique authors 
export async function getAuthors() {
    return [...new Set(blogsDb.map(({author}) => author))]
}

export async function addBlog(data) {
    console.log("data", data)
    blogsDb.push(data)
    return data
}

const sportsDb = [
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
    {
        sport: "Surfing",
        date: "10-10-2011",
        location: "Alaska"
    }, 
    {
        sport: "Track",
        date: "12-31-2023",
        location: "Wisconsin"
    }, 
];

export async function getSportsEntries() {
    return sportsDb
}

// fills dropdown with current list of unique sport
export async function getSports() {
    // unique values (set)
    return [...new Set(sportsDb.map(({sport}) => sport))]
}

export async function addSports(data) {
    console.log("data", data)
    sportsDb.push(data)
    return data
}