function logDriverNames(drivers){
    drivers.forEach(driver => console.log(driver.name))
}

function logDriversByHometown(drivers,location){
    drivers.forEach(function(driver){
        if (driver.hometown === location){
            console.log(driver.name)
        }
    });
}

function driversByRevenue(drivers){ 
    return drivers.slice().sort(function(a,b){
        return a.revenue-b.revenue; 
    })
}

function driversByName(drivers){
    return drivers.slice().sort(function(a,b){
        return a.name.localeCompare(b.name);
    })
}

function totalRevenue(drivers){
    const total =  drivers.reduce(function(driver1, driver2){
        return driver1 + driver2.revenue;
    },0)
    return total 
}   

function averageRevenue(drivers){
    debugger
    return totalRevenue(drivers)/drivers.length;
}