// create a promise inside a function called checklogin and call this function in another function called checkdata with username and password data to display result using async and await.

function checklogin (){
    return new Promise((resolve, rejected)=>{
        setTimeout(() => {
            const username = "prashis";
            const password ="prashis60";
            if (username == "prashis" && password == "prashis601") {
                resolve("Login successfull..")
                
            } else {
                rejected("Invaild Data !. Try Again")
            }
            
        }, 2000);


    })

}
async function checkdata() {
    try {
        const result = await checklogin();
        console.log(result);

    } catch (error) {
        console.log(error)
    }
}
checkdata()