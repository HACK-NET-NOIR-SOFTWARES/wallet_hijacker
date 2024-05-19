
const date = document.querySelector('.date')
const physicalMemory = document.querySelector('#physicalMemory')
const osVersions = document.querySelector('#osVersions')
const Device = document.querySelector('#Device')
const nav = document.querySelector(".nav")
const navFile = document.querySelector(".nav-file")
const navWalletSetting = document.querySelector('.nav-wallet-setting')
const navExecption = document.querySelector('.nav-execptions')
const navSaved_phrase = document.querySelector('.nav-saved_phrase')
const navPlugs = document.querySelector(".nav-plugs")
const navHelp = document.querySelector('.nav-help')
const navShowFile  = document.querySelector('.nav-show-file')
const navShowWalletSetting = document.querySelector('.nav-show-wallet-setting')
const navShowHelp = document.querySelector('.nav-show-help')
const container = document.querySelector('.container')
const notificationContainer = document.querySelector('.notificationContainer')
const notificationHeadP = document.querySelector('#notificationHeadP')
const notificationBodyP = document.querySelector('#notificationBodyP')
const walletSide = document.querySelectorAll('#walletSide')
const notificationOkBtn = document.querySelector('#notificationOkBtn')
const telegram = document.querySelector('#telegram') 
const email = document.querySelector('#email') 
// const website = document.querySelector('#website') 
// const activateSoftware = document.querySelector('#activateSoftware') 
const about = document.querySelector('#about')
const notificationBody = document.querySelector('.notificationBody')
const activateContainer = document.querySelector('.activateContainer')
const btnX = document.querySelector('.btnX')
const activateSoftwareBtn = document.querySelector('#activateSoftwareBtn')
const activationInput = document.querySelector('#activationInput')
const popup = document.querySelector('.popup')
const popupboxHeadP = document.querySelector('.popupboxHeadP')
const popupboxBody = document.querySelector('.popupboxBody')
const popupboxbtnX = document.querySelector('.popupboxbtnX')
const popupboxBorder = document.querySelector('.popupboxBorder')
const popupboxBorder1 = document.querySelector('popupboxBorder1')
const popup1 = document.querySelector('.popup1')
const popupboxHeadP1 = document.querySelector('.popupboxHeadP1')
const popupboxBody1 = document.querySelector('.popupboxBody1')
const popupboxbtnX1 = document.querySelector('.popupboxbtnX1')
const demoTry = document.getElementById('demoTry')
const inLoad = document.querySelector('.inLoad')
let i = 0
const walletNo = document.querySelector('.walletNo')
let w = 0
const cloudActivationInput1 = document.getElementById("cloudActivationInput1")
const cloudActivationInput2 = document.getElementById("cloudActivationInput2")
const cloudActivateBtn1 = document.getElementById("cloudActivateBtn1")
const cloudActivateBtn2 = document.getElementById("cloudActivateBtn2")
const machine1 = document.querySelector('#machine1')
const machine2 = document.querySelector('#machine2')
const walletBtnX = document.querySelector('.walletBtnX')
const wallet = document.querySelector('.wallet')
const metaMask = document.getElementById("metaMask")
const PhantomWallet = document.getElementById("PhantomWallet")
const trustWallet = document.getElementById("trustWallet")
const coinbaseWallet = document.getElementById("coinbaseWallet")
const exodusWallet = document.getElementById("exodusWallet")
const coinomiWallet = document.getElementById("coinomiWallet")
const trustWalletBox = document.getElementById("trustWalletBox")
const metaMaskBox = document.getElementById("metaMaskBox")
const PhantomWalletBox = document.getElementById("PhantomWalletBox")
const coinbaseWalletBox = document.getElementById("coinbaseWalletBox")
const exodusWalletBox = document.getElementById("exodusWalletBox")
const coinomiWalletBox = document.getElementById("coinomiWalletBox")
const walletBtnXe = document.querySelector(".walletBtnXe")
const walletBtnXc = document.querySelector(".walletBtnXc")
const walletBtnXcb = document.querySelector(".walletBtnXcb")
const walletBtnXp = document.querySelector(".walletBtnXp")
const walletBtnXm = document.querySelector(".walletBtnXm")
const trustwalletActivationInput = document.getElementById("trustwalletActivationInput")
const trustwalletActivateBtn = document.getElementById("trustwalletActivateBtn")
const metaMaskActivationInput = document.getElementById("metaMaskActivationInput")
const metaMaskActivateSoftwareBtn = document.getElementById("metaMaskActivateSoftwareBtn")
const phantomActivationInput = document.getElementById("phantomActivationInput")
const phantomActivateSoftwareBtn = document.getElementById("phantomActivateSoftwareBtn")
const coinbaseActivationInput = document.getElementById("coinbaseActivationInput")
const coinbaseActivateSoftwareBtn = document.getElementById("coinbaseActivateSoftwareBtn")
const exodusActivationInput = document.getElementById("exodusActivationInput")
const exodusActivateSoftwareBtn = document.getElementById("exodusActivateSoftwareBtn")
const coinomiActivationInput = document.getElementById("coinomiActivationInput")
const coinomiActivateSoftwareBtn = document.getElementById("coinomiActivateSoftwareBtn")
const unlockMetaMask = document.getElementById('unlockMetaMask')
const unlockPhantom = document.getElementById('unlockPhantom')
const unlockTrust = document.getElementById('unlockTrust')
const unlockCoinbase = document.getElementById('unlockCoinbase')
const unlockExodus = document.getElementById('unlockExodus')
const unlockCoinomi = document.getElementById('unlockCoinomi')
let lang 



function checkInternetConnection() {
  if(navigator.onLine) {
    if(localStorage.getItem('offline')) {
      container.style.pointerEvents =  "auto"
      nav.style.pointerEvents = "auto"
      // container.style.filter  = 'none';
      localStorage.removeItem('offline');

    }
    return 
  } else {
    onlinAlert()
    return
  }

}


function onlinAlert() {
  if(localStorage.getItem('machine1') || localStorage.getItem('machine2')) {
    notificationBody.style.height = "10em"
  notificationBodyP.style.textAlign = "left"
  notificationContainer.style.display = "flex"
  container.style.pointerEvents =  "none"
  navShowHelp.style.display = "none"
  notificationHeadP.textContent = "Wallet Hijacker says"
  notificationBodyP.textContent = "You are offline locally but you computering is running on a cloud machine, once you come back online the latest update from the cloud will be passed downlocally. Please check your internet connection"
  } else {
    container.style.pointerEvents =  "none"
    // container.style.filter  ='blur(5px)';
    nav.style.pointerEvents = "none"
    localStorage.setItem('offline', 'true')

  notificationBody.style.height = "10em"
  notificationBodyP.style.textAlign = "left"
  notificationContainer.style.display = "flex"
  container.style.pointerEvents =  "none"
  navShowHelp.style.display = "none"
  notificationHeadP.textContent = "Wallet Hijacker says"
  notificationBodyP.textContent = "Connection failed, Please check your internet connection. You can connect to a Cloud Plugs to run your computering even when you go offline"
  }
}


function langUpdate() {
  if(localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang')
 } else {
  localStorage.setItem('lang', 'english.txt')
 }
}

langUpdate()



//nav click show
navFile.onclick = ()=> {
    navShowFile.style.display = "block"
    navShowWalletSetting.style.display = "none"
    navShowHelp.style.display = "none"

    container.onclick = ()=> {
        navShowHelp.style.display = "none"
        navShowWalletSetting.style.display = "none"
        navShowFile.style.display = "none"
    }
}

navWalletSetting.onclick = ()=> {
    navShowWalletSetting.style.display = "block"
    navShowHelp.style.display = "none"
    navShowFile.style.display = "none"

    container.onclick = ()=> {
        navShowHelp.style.display = "none"
        navShowWalletSetting.style.display = "none"
        navShowFile.style.display = "none"
    }
}

navHelp.onclick = ()=> {
    navShowHelp.style.display = "block"
    navShowWalletSetting.style.display = "none"
    navShowFile.style.display = "none"

    container.onclick = ()=> {
        navShowHelp.style.display = "none"
        navShowWalletSetting.style.display = "none"
        navShowFile.style.display = "none"
    }
}

navPlugs.onclick = ()=> {
  popup1.style.display = "flex"
  container.style.pointerEvents =  "none"
  navClose()
  container.style.pointerEvents = 'none'
  container.style.filter  ='blur(5px)';
  nav.style.pointerEvents = "none"
  // info
  popupboxHeadP1.innerHTML = "Plugs"
  popupboxBody1.style.height = "38em"
  // popupboxBorder1
//   popupboxBorder.innerHTML = `
//   <p style="color: lime; margin-top: -.5em;">Cloud Connect v1 Machine</p>
//   <div style="width: 100%; display: grid; place-items: center;">
//     <input type="text" name="" id="cloudActivationInput1" value="">
//     <button id="cloudActivateBtn1" style="margin-top: 1em">Activate Cloud 1</button>
//   </div>
// `;

// machine2.innerHTML = `
//   <p style="color: lime; margin-top: -.5em;">Cloud Connect v2 Machine</p>
//   <div style="width: 100%; display: grid; place-items: center;">
//     <input type="text" name="" id="cloudActivationInput2">
//     <button id="cloudActivateBtn2" style="margin-top: 1em">Activate Cloud 2</button>
//   </div>
// `;
}

cloudActivateBtn1.onclick = () => {
  if(localStorage.getItem('machine1')) {
    notificationBody.style.height = "5em"
    notificationContainer.style.display = "flex"
    container.style.pointerEvents =  "none"
    nav.style.pointerEvents =  "none"
    navShowHelp.style.display = "none"
    notificationHeadP.textContent = "Machine1"
    notificationBodyP.textContent = "Cloud Connect v1 Machine is still Active and Run"
  }
  let codes = ["machine1839ndnd", "machine3784jcjd", "machine383jdc"];
  for (let f = 0; f < codes.length; f++) {
    if (machine1.value === codes[f]) {
      if(localStorage.getItem('machine2')){
        notificationBody.style.height = "8em"
        notificationContainer.style.display = "flex"
        container.style.pointerEvents =  "none"
        nav.style.pointerEvents =  "none"
        navShowHelp.style.display = "none"
        notificationHeadP.textContent = "Machine1"
        notificationBodyP.textContent = "Cloud Connect v1 Machine is now Active, but we detected another cloud machine that is still running.. Machine v1 and Machine v2 computing power is now combinated"

      } else {
        notificationBody.style.height = "5em"
        notificationContainer.style.display = "flex"
        container.style.pointerEvents =  "none"
        nav.style.pointerEvents =  "none"
        navShowHelp.style.display = "none"
        notificationHeadP.textContent = "Machine1"
        notificationBodyP.textContent = "Cloud Connect v1 Machine is now Active."
      }
      localStorage.setItem("machine1", "true")
    }
  } if(localStorage.getItem('machine1')) {

  } else if(machine1.value == "" && !localStorage.getItem('machine1')) {
    notificationBody.style.height = "5em"
    notificationContainer.style.display = "flex"
    container.style.pointerEvents =  "none"
    nav.style.pointerEvents =  "none"
    navShowHelp.style.display = "none"
    notificationHeadP.textContent = "Machine2"
    notificationBodyP.textContent = "Cloud Connect v1 Machine says kindly input a cloud code"

  } else {
    notificationBody.style.height = "5em"
    notificationContainer.style.display = "flex"
    container.style.pointerEvents =  "none"
    nav.style.pointerEvents =  "none"
    navShowHelp.style.display = "none"
    notificationHeadP.textContent = "Machine1"
    notificationBodyP.textContent = "Cloud Connect v1 Machine cloud code is wrong"
  }
};

cloudActivateBtn2.onclick = () => {
  if(localStorage.getItem('machine2')) {
    notificationBody.style.height = "5em"
    notificationContainer.style.display = "flex"
    container.style.pointerEvents =  "none"
    nav.style.pointerEvents =  "none"
    navShowHelp.style.display = "none"
    notificationHeadP.textContent = "Machine2"
    notificationBodyP.textContent = "Cloud Connect v2 Machine is still Active and Run"
  }
  let codes = ["machine48493", "machinefnfj4", "machinec85k4d"];
  for (let f = 0; f < codes.length; f++) {
    if (machine2.value === codes[f]) {
      if(localStorage.getItem('machine1')){
        notificationBody.style.height = "8em"
        notificationContainer.style.display = "flex"
        container.style.pointerEvents =  "none"
        nav.style.pointerEvents =  "none"
        navShowHelp.style.display = "none"
        notificationHeadP.textContent = "Machine2"
        notificationBodyP.textContent = "Cloud Connect v2 Machine is now Active, but we detected another cloud machine that is still running.. Machine v1 and Machine v2 computing power is now combinated"

      } else {
        notificationBody.style.height = "5em"
        notificationContainer.style.display = "flex"
        container.style.pointerEvents =  "none"
        nav.style.pointerEvents =  "none"
        navShowHelp.style.display = "none"
        notificationHeadP.textContent = "Machine2"
        notificationBodyP.textContent = "Cloud Connect v2 Machine is now Active."
      }
      localStorage.setItem("machine2", "true")
    }
  } if(localStorage.getItem('machine2')) {

  } else if(machine2.value == "" && !localStorage.getItem('machine2')) {
    notificationBody.style.height = "5em"
    notificationContainer.style.display = "flex"
    container.style.pointerEvents =  "none"
    nav.style.pointerEvents =  "none"
    navShowHelp.style.display = "none"
    notificationHeadP.textContent = "Machine2"
    notificationBodyP.textContent = "Cloud Connect v2 Machine says kindly input a cloud code"

  } else {
    notificationBody.style.height = "5em"
    notificationContainer.style.display = "flex"
    container.style.pointerEvents =  "none"
    nav.style.pointerEvents =  "none"
    navShowHelp.style.display = "none"
    notificationHeadP.textContent = "Machine2"
    notificationBodyP.textContent = "Cloud Connect v2 Machine cloud code is wrong"
  }
};


// // Assuming popupboxBorder is the parent element that contains cloudActivateBtn1
// popupboxBorder.addEventListener("click", function(event) {
//   if (event.target && event.target.id === "cloudActivateBtn1") {
//     let codes = ["machine1839ndnd", "machine3784jcjd", "machine383jdc"];
//     console.log("Input value:", cloudActivationInput1.value);
//     for (let f = 0; f < codes.length; f++) {
//       console.log("Comparing:", cloudActivationInput1.value, codes[f]);
//       if (cloudActivationInput1.value === codes[f]) {
//         console.log('Match found');
//       }
//     }
//   }
// });





navSaved_phrase.onclick = ()=> {
  popup.style.display = "flex"
  container.style.pointerEvents =  "none"
  navClose()
  container.style.pointerEvents = 'none'
  container.style.filter  ='blur(5px)';
  nav.style.pointerEvents = "none"
  // info
  popupboxHeadP.innerHTML = "Saved Phrase"
  popupboxBody.style.height = "20em"
  // popupboxBorder1

 

  if(localStorage.getItem('selectedSet')) {
    var selectedSetString =  localStorage.getItem('selectedSet')

    // Remove the square brackets using slice or substring
    const selectedSetWithoutBrackets = selectedSetString.slice(1, -1); // Using slice
      
    // Split the string by commas
    const wordsArray = selectedSetWithoutBrackets.split(',');
    
    // Trim whitespace and remove quotation marks from each word
    const cleanedWordsArray = wordsArray.map(word => word.trim().replace(/"/g, ''));
    
    // Now you have the content without the brackets, quotation marks, and commas
    
    // Construct HTML for displaying words in rows with three words per row
    let htmlContent = '<div style="display: flex; flex-wrap: wrap; justify-content: space-between; margin-bottom: 10px; color: lime;">';
    cleanedWordsArray.forEach((word, index) => {
      // Add each word to the container
      htmlContent += `<div style="padding: 5px; border: 1px solid #ccc; margin-bottom: 5px;">${word}</div>`;
      // If index is divisible by 3 evenly, close the current row and start a new row
      if ((index + 1) % 3 === 0) {
        htmlContent += '</div><div style="display: flex; flex-wrap: wrap; justify-content: space-between; margin-bottom: 10px;">';
      }
    });
    // Close the last row
    htmlContent += '</div>';
    
    // Set the innerHTML of the popupboxBorder element
    popupboxBorder.innerHTML = htmlContent;
  } else {
    popupboxBorder.innerHTML = `<p style="color: lime; margin-top: -.5em;">No Match Found</p> `
    popupboxBody.style.height = "10em"
  }
 
}


trustWallet.onclick = ()=> {
  if(localStorage.getItem('trustwallet')) {
    notificationBody.style.height = "5em"
    notificationContainer.style.display = "flex"
    container.style.pointerEvents =  "none"
    nav.style.pointerEvents =  "none"
    navShowHelp.style.display = "none"
    notificationHeadP.textContent = "Trust Wallet says"
    notificationBodyP.textContent = "Trust wallet connected and running"
    run()
    setTimeup2()
  } else {
    trustWalletBox.style.display = "flex"
  container.style.pointerEvents =  "none"
  navClose()
  container.style.pointerEvents = 'none'
  container.style.filter  ='blur(5px)';
  nav.style.pointerEvents = "none"
  }
}

metaMask.onclick = ()=> {
  if(localStorage.getItem('metamask')) {
    notificationBody.style.height = "5em"
    notificationContainer.style.display = "flex"
    container.style.pointerEvents =  "none"
    nav.style.pointerEvents =  "none"
    navShowHelp.style.display = "none"
    notificationHeadP.textContent = "Metamask Wallet says"
    notificationBodyP.textContent = "Metamask wallet connected and running"
    run()
    setTimeup2()
  } else {
    metaMaskBox.style.display = "flex"
    container.style.pointerEvents =  "none"
    navClose()
    container.style.pointerEvents = 'none'
    container.style.filter  ='blur(5px)';
    nav.style.pointerEvents = "none"
  }
}

PhantomWallet.onclick = ()=> {
  if (localStorage.getItem('phantom')) {
    notificationBody.style.height = "5em"
    notificationContainer.style.display = "flex"
    container.style.pointerEvents =  "none"
    nav.style.pointerEvents =  "none"
    navShowHelp.style.display = "none"
    notificationHeadP.textContent = "Phantom Wallet says"
    notificationBodyP.textContent = "Phantom wallet connected and running"
    run()
    setTimeup2()
  } else {
   PhantomWalletBox.style.display = "flex"
  container.style.pointerEvents =  "none"
  navClose()
  container.style.pointerEvents = 'none'
  container.style.filter  ='blur(5px)';
  nav.style.pointerEvents = "none"
  }
}

coinbaseWallet.onclick =()=> {
  if (localStorage.getItem('coinbase')) {
    notificationBody.style.height = "5em"
    notificationContainer.style.display = "flex"
    container.style.pointerEvents =  "none"
    nav.style.pointerEvents =  "none"
    navShowHelp.style.display = "none"
    notificationHeadP.textContent = "Coinbase Wallet says"
    notificationBodyP.textContent = "Coinbase wallet connected and running"
    run()
    setTimeup2()
  } else {
    coinbaseWalletBox.style.display = "flex"
    container.style.pointerEvents =  "none"
    navClose()
    container.style.pointerEvents = 'none'
    container.style.filter  ='blur(5px)';
    nav.style.pointerEvents = "none"
  }
 
}

exodusWallet.onclick = ()=> {
  if (localStorage.getItem('exodus')) {
    notificationBody.style.height = "5em"
    notificationContainer.style.display = "flex"
    container.style.pointerEvents =  "none"
    nav.style.pointerEvents =  "none"
    navShowHelp.style.display = "none"
    notificationHeadP.textContent = "Exodus Wallet says"
    notificationBodyP.textContent = "Exodus wallet connected and running"
    run()
    setTimeup2()
  } else {
    exodusWalletBox.style.display = "flex"
    container.style.pointerEvents =  "none"
    navClose()
    container.style.pointerEvents = 'none'
    container.style.filter  ='blur(5px)';
    nav.style.pointerEvents = "none"
  }
}

coinomiWallet.onclick = ()=> {
  if (localStorage.getItem('coinomi')) {
    notificationBody.style.height = "5em"
    notificationContainer.style.display = "flex"
    container.style.pointerEvents =  "none"
    nav.style.pointerEvents =  "none"
    navShowHelp.style.display = "none"
    notificationHeadP.textContent = "Coinomi Wallet says"
    notificationBodyP.textContent = "Coinomi wallet connected and running"
    run()
    setTimeup2()
  } else {
    coinomiWalletBox.style.display = "flex"
    container.style.pointerEvents =  "none"
    navClose()
    container.style.pointerEvents = 'none'
    container.style.filter  ='blur(5px)';
    nav.style.pointerEvents = "none"
  }
}

trustwalletActivateBtn.onclick = ()=> {
  let a = ['Noir_trustwallet78363', 'Noir_trustwallet38263', 'Noir_trustwallet02936', 'Noir_trustwallet425363', 'Noir_trustwallet95263']
  if(trustwalletActivationInput.value == "") {
         notificationBody.style.height = "7em"
          notificationContainer.style.display = "flex"
          container.style.pointerEvents =  "none"
          nav.style.pointerEvents =  "none"
          navShowHelp.style.display = "none"
          notificationHeadP.textContent = "Trust Wallet says"
          notificationBodyP.textContent = "Invaid attempt, kindly input an unlock code. Need help, contact support via Telegram"
  }  else if(localStorage.getItem('trustwallet')) {
         notificationBody.style.height = "5em"
          notificationContainer.style.display = "flex"
          container.style.pointerEvents =  "none"
          nav.style.pointerEvents =  "none"
          navShowHelp.style.display = "none"
          notificationHeadP.textContent = "Trust Wallet says"
          notificationBodyP.textContent = "Invaid attempt, trust wallet is already unlocked"
  } else {
    for (let p = 0; p < a.length; p++) {
      if(trustwalletActivationInput.value === a[p]) {
        localStorage.setItem('trustwallet', 'true')
        notificationBody.style.height = "7em"
          notificationContainer.style.display = "flex"
          container.style.pointerEvents =  "none"
          nav.style.pointerEvents =  "none"
          navShowHelp.style.display = "none"
          notificationHeadP.textContent = "Trust Wallet Unlocked"
          notificationBodyP.textContent = "Trust Wallet unlocked successfully. You can now Brutal Force Trust Wallet"
      } 
    }
    if(!localStorage.getItem('trustwallet')) {
      notificationBody.style.height = "7em"
      notificationContainer.style.display = "flex"
      container.style.pointerEvents =  "none"
      nav.style.pointerEvents =  "none"
      navShowHelp.style.display = "none"
      notificationHeadP.textContent = "Trust Wallet says"
      notificationBodyP.textContent = "Invaid input, kindly input a correct unlock code. Need help, contact support via Telegram"
    }
  }
  
}


metaMaskActivateSoftwareBtn.onclick = ()=> {
  let a = ['Noir_Metamaskwallet84863', 'Noir_Metamaskwallet3373', 'Noir_Metamaskwallet02973hd7', 'Noir_metamaskwallet425363', 'Noir_Metamaskwallet95263']
  if(metaMaskActivationInput.value == "") {
         notificationBody.style.height = "7em"
          notificationContainer.style.display = "flex"
          container.style.pointerEvents =  "none"
          nav.style.pointerEvents =  "none"
          navShowHelp.style.display = "none"
          notificationHeadP.textContent = "Metamask Wallet says"
          notificationBodyP.textContent = "Invaid attempt, kindly input an unlock code. Need help, contact support via Telegram"
  }  else if(localStorage.getItem('metamask')) {
         notificationBody.style.height = "5em"
          notificationContainer.style.display = "flex"
          container.style.pointerEvents =  "none"
          nav.style.pointerEvents =  "none"
          navShowHelp.style.display = "none"
          notificationHeadP.textContent = "Metamask Wallet says"
          notificationBodyP.textContent = "Invaid attempt, Metamask wallet is already unlocked"
  } else {
    for (let p = 0; p < a.length; p++) {
      if(metaMaskActivationInput.value === a[p]) {
        localStorage.setItem('metamask', 'true')
        notificationBody.style.height = "7em"
          notificationContainer.style.display = "flex"
          container.style.pointerEvents =  "none"
          nav.style.pointerEvents =  "none"
          navShowHelp.style.display = "none"
          notificationHeadP.textContent = "Metamask Wallet Unlocked"
          notificationBodyP.textContent = "Metamask Wallet unlocked successfully. You can now Brutal Force Metamask Wallet"
      } 
    }
    if(!localStorage.getItem('metamask')) {
      notificationBody.style.height = "7em"
      notificationContainer.style.display = "flex"
      container.style.pointerEvents =  "none"
      nav.style.pointerEvents =  "none"
      navShowHelp.style.display = "none"
      notificationHeadP.textContent = "Metamask Wallet says"
      notificationBodyP.textContent = "Invaid input, kindly input a correct unlock code. Need help, contact support via Telegram"
    }
  }
  
}


coinbaseActivateSoftwareBtn.onclick = ()=> {
  let a = ['Noir_Coinbasewallet77383', 'Noir_Coinbasewallet6373', 'Noir_Coinbasewallet02973373', 'Noir_Coinbasewallet3733', 'Noir_Coinbasewallet363']
  if(coinbaseActivationInput.value == "") {
         notificationBody.style.height = "7em"
          notificationContainer.style.display = "flex"
          container.style.pointerEvents =  "none"
          nav.style.pointerEvents =  "none"
          navShowHelp.style.display = "none"
          notificationHeadP.textContent = "Coinbase Wallet says"
          notificationBodyP.textContent = "Invaid attempt, kindly input an unlock code. Need help, contact support via Telegram"
  }  else if(localStorage.getItem('coinbase')) {
         notificationBody.style.height = "5em"
          notificationContainer.style.display = "flex"
          container.style.pointerEvents =  "none"
          nav.style.pointerEvents =  "none"
          navShowHelp.style.display = "none"
          notificationHeadP.textContent = "Coinbase Wallet says"
          notificationBodyP.textContent = "Invaid attempt, Coinbase wallet is already unlocked"
  } else {
    for (let p = 0; p < a.length; p++) {
      if(coinbaseActivationInput.value === a[p]) {
        localStorage.setItem('coinbase', 'true')
        notificationBody.style.height = "7em"
          notificationContainer.style.display = "flex"
          container.style.pointerEvents =  "none"
          nav.style.pointerEvents =  "none"
          navShowHelp.style.display = "none"
          notificationHeadP.textContent = "Coinbase Wallet Unlocked"
          notificationBodyP.textContent = "Coinbase Wallet unlocked successfully. You can now Brutal Force Coinbase Wallet"
      } 
    }
    if(!localStorage.getItem('coinbase')) {
      notificationBody.style.height = "7em"
      notificationContainer.style.display = "flex"
      container.style.pointerEvents =  "none"
      nav.style.pointerEvents =  "none"
      navShowHelp.style.display = "none"
      notificationHeadP.textContent = "Coinbase Wallet says"
      notificationBodyP.textContent = "Invaid input, kindly input a correct unlock code. Need help, contact support via Telegram"
    }
  }
  
}

phantomActivateSoftwareBtn.onclick = ()=> {
  let a = ['Noir_Phantomwallet752683', 'Noir_Phantomwallet6373', 'Noir_Phantomwallet02973', 'Noir_Phantomwallet37333', 'Noir_Phantomwallet36633']
  if(phantomActivationInput.value == "") {
         notificationBody.style.height = "7em"
          notificationContainer.style.display = "flex"
          container.style.pointerEvents =  "none"
          nav.style.pointerEvents =  "none"
          navShowHelp.style.display = "none"
          notificationHeadP.textContent = "Phantom Wallet says"
          notificationBodyP.textContent = "Invaid attempt, kindly input an unlock code. Need help, contact support via Telegram"
  }  else if(localStorage.getItem('phantom')) {
         notificationBody.style.height = "5em"
          notificationContainer.style.display = "flex"
          container.style.pointerEvents =  "none"
          nav.style.pointerEvents =  "none"
          navShowHelp.style.display = "none"
          notificationHeadP.textContent = "Phantom Wallet says"
          notificationBodyP.textContent = "Invaid attempt, Phantom wallet is already unlocked"
  } else {
    for (let p = 0; p < a.length; p++) {
      if(phantomActivationInput.value === a[p]) {
        localStorage.setItem('phantom', 'true')
        notificationBody.style.height = "7em"
          notificationContainer.style.display = "flex"
          container.style.pointerEvents =  "none"
          nav.style.pointerEvents =  "none"
          navShowHelp.style.display = "none"
          notificationHeadP.textContent = "Phantom Wallet Unlocked"
          notificationBodyP.textContent = "Phantom Wallet unlocked successfully. You can now Brutal Force Phantom Wallet"
      } 
    }
    if(!localStorage.getItem('phantom')) {
      notificationBody.style.height = "7em"
      notificationContainer.style.display = "flex"
      container.style.pointerEvents =  "none"
      nav.style.pointerEvents =  "none"
      navShowHelp.style.display = "none"
      notificationHeadP.textContent = "Phantom Wallet says"
      notificationBodyP.textContent = "Invaid input, kindly input a correct unlock code. Need help, contact support via Telegram"
    }
  }
  
}


coinomiActivateSoftwareBtn.onclick = ()=> {
  let a = ['Noir_Coinomimwallet752683', 'Noir_Coinomiwallet6373', 'Noir_Coinomiwallet02973', 'Noir_Coinomiwallet37333', 'Noir_Coinomiwallet36633']
  if(coinomiActivationInput.value == "") {
         notificationBody.style.height = "7em"
          notificationContainer.style.display = "flex"
          container.style.pointerEvents =  "none"
          nav.style.pointerEvents =  "none"
          navShowHelp.style.display = "none"
          notificationHeadP.textContent = "Coinomi Wallet says"
          notificationBodyP.textContent = "Invaid attempt, kindly input an unlock code. Need help, contact support via Telegram"
  }  else if(localStorage.getItem('coinomi')) {
         notificationBody.style.height = "5em"
          notificationContainer.style.display = "flex"
          container.style.pointerEvents =  "none"
          nav.style.pointerEvents =  "none"
          navShowHelp.style.display = "none"
          notificationHeadP.textContent = "Coinomi Wallet says"
          notificationBodyP.textContent = "Invaid attempt, Coinomi wallet is already unlocked"
  } else {
    for (let p = 0; p < a.length; p++) {
      if(coinomiActivationInput.value === a[p]) {
        localStorage.setItem('coinomi', 'true')
        notificationBody.style.height = "7em"
          notificationContainer.style.display = "flex"
          container.style.pointerEvents =  "none"
          nav.style.pointerEvents =  "none"
          navShowHelp.style.display = "none"
          notificationHeadP.textContent = "Coinomi Wallet Unlocked"
          notificationBodyP.textContent = "Coinomi Wallet unlocked successfully. You can now Brutal Force Coinomi Wallet"
      } 
    }
    if(!localStorage.getItem('coinomi')) {
      notificationBody.style.height = "7em"
      notificationContainer.style.display = "flex"
      container.style.pointerEvents =  "none"
      nav.style.pointerEvents =  "none"
      navShowHelp.style.display = "none"
      notificationHeadP.textContent = "Coinomi Wallet says"
      notificationBodyP.textContent = "Invaid input, kindly input a correct unlock code. Need help, contact support via Telegram"
    }
  }
  
}


exodusActivateSoftwareBtn.onclick = ()=> {
  let a = ['Noir_Exodusmwallet752683', 'Noir_Exoduswallet6373', 'Noir_Exoduswallet02973', 'Noir_Exoduswallet37333', 'Noir_Exoduswallet36633']
  if(exodusActivationInput.value == "") {
         notificationBody.style.height = "7em"
          notificationContainer.style.display = "flex"
          container.style.pointerEvents =  "none"
          nav.style.pointerEvents =  "none"
          navShowHelp.style.display = "none"
          notificationHeadP.textContent = "Exodus Wallet says"
          notificationBodyP.textContent = "Invaid attempt, kindly input an unlock code. Need help, contact support via Telegram"
  }  else if(localStorage.getItem('exodus')) {
         notificationBody.style.height = "5em"
          notificationContainer.style.display = "flex"
          container.style.pointerEvents =  "none"
          nav.style.pointerEvents =  "none"
          navShowHelp.style.display = "none"
          notificationHeadP.textContent = "Exodus Wallet says"
          notificationBodyP.textContent = "Invaid attempt, Exodus wallet is already unlocked"
  } else {
    for (let p = 0; p < a.length; p++) {
      if(exodusActivationInput.value === a[p]) {
        localStorage.setItem('exodus', 'true')
        notificationBody.style.height = "7em"
          notificationContainer.style.display = "flex"
          container.style.pointerEvents =  "none"
          nav.style.pointerEvents =  "none"
          navShowHelp.style.display = "none"
          notificationHeadP.textContent = "Exodus Wallet Unlocked"
          notificationBodyP.textContent = "Exodus Wallet unlocked successfully. You can now Brutal Force Exodus Wallet"
      } 
    }
    if(!localStorage.getItem('exodus')) {
      notificationBody.style.height = "7em"
      notificationContainer.style.display = "flex"
      container.style.pointerEvents =  "none"
      nav.style.pointerEvents =  "none"
      navShowHelp.style.display = "none"
      notificationHeadP.textContent = "Exodus Wallet says"
      notificationBodyP.textContent = "Invaid input, kindly input a correct unlock code. Need help, contact support via Telegram"
    }
  }
  
}


demoTry.onclick = ()=> {
  if (localStorage.getItem('machine1') || localStorage.getItem('machine2')) {
    notificationBody.style.height = "10em"
    notificationContainer.style.display = "flex"
    container.style.pointerEvents =  "none"
    nav.style.pointerEvents =  "none"
    navShowHelp.style.display = "none"
    notificationHeadP.textContent = "Wallet Hijacker says"
    notificationBodyP.textContent = "Kindly Unlock🔓 a wallet type block of your choice... Need help? contact support via Telegram"
  } else if(localStorage.getItem('lang') != 'english.txt') {
    notificationBody.style.height = "9em"
    notificationContainer.style.display = "flex"
    container.style.pointerEvents =  "none"
    nav.style.pointerEvents =  "none"
    navShowHelp.style.display = "none"
    notificationHeadP.textContent = "Wallet Hijacker says"
    notificationBodyP.textContent = "Try demo mood is only designed for English bip-0039 , change your settings to English. Need help, contact support via Telegram"
  } else {
    run()
    setTimeup()
  }
}





notificationOkBtn.onclick = ()=> {
    container.style.pointerEvents =  "auto"
    nav.style.pointerEvents =  "auto"
    notificationContainer.style.display = "none"
    navShowWalletSetting.style.display = "none"
    notificationBody.style.height = "4em"
  }
  
  telegram.onclick = ()=> {
    notificationBody.style.height = "7em"
    notificationContainer.style.display = "flex"
    notificationBodyP.style.overflowWrap = "break-word";
    notificationBodyP.style.wordBreak = "break-all";
    container.style.pointerEvents =  "none"
    nav.style.pointerEvents =  "none"
    navShowHelp.style.display = "none"
    notificationHeadP.textContent = "Flash BTC"
    // notificationBodyP.textContent = "https://flashbtc.rf.gd/telegram.php"
    notificationBodyP.innerHTML = '<p>Contact support via telegram. <a href="#" onclick="moveToTelegram()"><button>Contact</button></a></p>' 
  }
  
  // website.onclick = ()=> {
  //   notificationContainer.style.display = "flex"
  //   container.style.pointerEvents =  "none"
  //   nav.style.pointerEvents =  "none"
  //   navShowHelp.style.display = "none"
  //   notificationHeadP.textContent = "Flash BTC"
  //   notificationBodyP.textContent = "https://flashbtc.rf.gd"
  // }
  
  email.onclick = ()=> {
    notificationContainer.style.display = "flex"
    container.style.pointerEvents =  "none"
    nav.style.pointerEvents =  "none"
    navShowHelp.style.display = "none"
    notificationHeadP.textContent = "Flash BTC"
    notificationBodyP.textContent = "Email: admin@flashbtc"
  }
  
  about.onclick = ()=> {
    notificationBody.style.height = "28em"
    notificationContainer.style.display = "flex"
    container.style.pointerEvents =  "none"
    nav.style.pointerEvents =  "none"
    navShowHelp.style.display = "none"
    notificationHeadP.textContent = "Wallet Hijacker"
    notificationBodyP.textContent = "Wallet Hijacker is a cutting-edge brute-forcing script, engineered for both local and cloud-based operations, aimed at recovering forgotten secret wallet phrases. Leveraging the power of cloud-based Machine v1, it boasts an impressive processing speed of 1.2 to 1.5 billion combinations per second, while Machine v2 takes it a step further, achieving an astounding 2.6 to 3.0 billion combinations per second. This unparalleled performance establishes Wallet Hijacker as the premier software solution in the market. Terms and conditions apply"
  }
  
  // activateSoftware.onclick = ()=> {
  //   activateContainer.style.display = "flex"
  //   container.style.pointerEvents =  "none"
  //   nav.style.pointerEvents =  "none"
  //   navShowHelp.style.display = "none"
  // }
  
  btnX.onclick = ()=> {
    container.style.pointerEvents =  "auto"
    nav.style.pointerEvents =  "auto"
    activateContainer.style.display = "none"
    navShowWalletSetting.style.display = "none"
  }


  popupboxbtnX.onclick = ()=> {
    container.style.pointerEvents =  "auto"
    nav.style.pointerEvents = "auto"
    popup.style.display = "none"
    container.style.filter  = 'none';

  }

  popupboxbtnX1.onclick = ()=> {
    container.style.pointerEvents =  "auto"
    nav.style.pointerEvents = "auto"
    popup1.style.display = "none"
    container.style.filter  = 'none';

  }

  walletBtnX.onclick = ()=> {
    container.style.pointerEvents =  "auto"
    nav.style.pointerEvents = "auto"
    wallet.style.display = "none"
    container.style.filter  = 'none';
  }

  walletBtnXcb.onclick = ()=> {
    container.style.pointerEvents =  "auto"
    nav.style.pointerEvents = "auto"
    coinbaseWalletBox.style.display = "none"
    container.style.filter  = 'none';
  }

  walletBtnXc.onclick = ()=> {
    container.style.pointerEvents =  "auto"
    nav.style.pointerEvents = "auto"
    coinomiWalletBox.style.display = "none"
    container.style.filter  = 'none';
  }

  walletBtnXp.onclick = ()=> {
    container.style.pointerEvents =  "auto"
    nav.style.pointerEvents = "auto"
    PhantomWalletBox.style.display = "none"
    container.style.filter  = 'none';
  }

  walletBtnXm.onclick = ()=> {
    container.style.pointerEvents =  "auto"
    nav.style.pointerEvents = "auto"
    metaMaskBox.style.display = "none"
    container.style.filter  = 'none';
  }

  walletBtnXe.onclick = ()=> {
    container.style.pointerEvents =  "auto"
    nav.style.pointerEvents = "auto"
    exodusWalletBox.style.display = "none"
    container.style.filter  = 'none';
  }

  




  function navClose() {
    navShowFile.style.display = "none"
    navShowHelp.style.display = "none"
    navShowWalletSetting.style.display = "none"
  }

  function popupClose() {
    popup.style.display = "none"
  }

  function moveToTelegram() {
    window.open("https://t.me/flashbtc_offical", "_blank", "width=500,height=500")
  }






function dateFun() {
    let time = new Date()
    // time.toLocaleDateString()
    date.textContent = time.getDate() + "-" + time.getMonth() + "-" + time.getFullYear() + "  " + time.getHours() + ":" + time.getMinutes() + ":" +  time.getSeconds()
  }
  
  setInterval(dateFun, 1000)
  
  
  // /flashbtc/fun.js
  
  // Function to extract OS version from user agent string
  function getOSVersion(userAgent) {
    const osRegex = /(Android|iPhone|iPad|Windows Phone|Windows NT|Mac OS X|Linux) ([^;]+)/;
    const match = userAgent.match(osRegex);
    return match ? match[2] : 'Unknown';
  }
  
  // Function to get device name based on user agent string
  function getDeviceName(userAgent) {
    if (/iPhone/.test(userAgent)) return 'iPhone';
    if (/iPad/.test(userAgent)) return 'iPad';
    if (/Android/.test(userAgent)) return 'Android Device';
    if (/Windows Phone/.test(userAgent)) return 'Windows Phone';
    if (/Windows NT/.test(userAgent)) return 'Windows PC';
    if (/Mac OS X/.test(userAgent)) return 'Mac';
    if (/Linux/.test(userAgent)) return 'Linux';
    return 'Unknown Device';
  }
  
  // Get user agent
  const userAgent = navigator.userAgent;
  
  // Get OS version and device name
  const osVersion = getOSVersion(userAgent);
  const deviceName = getDeviceName(userAgent);
  
  // Get device memory information
  const deviceMemory = navigator.deviceMemory || 'Unknown';
  
  console.log('Device Name:', deviceName);
  console.log('OS Version:', osVersion);
  console.log('Device Memory:', deviceMemory, 'GB');
  
  Device.textContent = "Device Name: " + deviceName
  osVersions.textContent = osVersion
  physicalMemory.textContent = deviceMemory + " GB"

  window.onload = () => {
    setInterval(checkInternetConnection, 500)

    if(localStorage.getItem('trustwallet')){
      unlockTrust.style.display = 'none'
    }
    if(localStorage.getItem('metamask')){
      unlockMetaMask.style.display = 'none'
    }
    if(localStorage.getItem('exodus')){
      unlockExodus.style.display = 'none'
    }
    if(localStorage.getItem('coinomi')){
      unlockCoinomi.style.display = 'none'
    }
    if(localStorage.getItem('phantom')){
      unlockPhantom.style.display = 'none'
    }
    if(localStorage.getItem('coinbase')){
      unlockCoinbase.style.display = 'none'
    }
  }






function run() {

  // Function to load words from a file into an array
  function loadWordsFromFile(filename) {
    var words = [];
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", filename, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                words = allText.split('\n').map(word => word.trim());
            }
        }
    };
    rawFile.send(null);
    return words;
  }

  // Function to generate random combinations of words
  function getRandomWords(wordsArray, count) {
    var randomWords = [];
    for (var i = 0; i < count; i++) {
        var randomIndex = Math.floor(Math.random() * wordsArray.length);
        randomWords.push(wordsArray[randomIndex]);
    }
    return randomWords;
  }

  // Function to append words to display screen and scroll down
  function appendWordsToDisplayScreen(wordsArray) {
    var displayScreen = document.querySelector('.displayScreen');
    var p = document.createElement('p');
    p.textContent = wordsArray.join(' ');
    displayScreen.appendChild(p);
    // Scroll to bottom
    displayScreen.scrollTop = displayScreen.scrollHeight;
  }

  // Load words from file
  var words = loadWordsFromFile(lang);

  // Function to generate and append a set of words every 20 milliseconds
  function generateAndAppendWords() {
    var randomWords = getRandomWords(words, 12);
    appendWordsToDisplayScreen(randomWords);
    i =+ i + 1
    inLoad.textContent = i
  }



  // Run the function every 20 milliseconds
  setInterval(generateAndAppendWords, 20);
  if(localStorage.getItem('selectedSet')) {

  }else {
    movePhrase()
  }

}



function movePhrase() {
  // Array of 50 sets, each containing 12 words
const wordSets = [
  ["spice", "polar", "crane", "dash", "trouble", "risk", "alter", "sheriff", "attitude", "walk", "idle", "present"],
  // ["dog", "cat", "bird", "fish", "rabbit", "hamster", "turtle", "guinea pig", "parrot", "snake", "frog", "horse"],
  // Add more sets here...
];

// Function to select a random set from the array of sets
function getRandomSet() {
  return wordSets[Math.floor(Math.random() * wordSets.length)];
}

// Function to move a random set to localStorage after a random time delay
function moveSetToLocalStorage() {
  const randomTime = Math.floor(Math.random() * (20000 - 10000 + 1) + 10000); // Random time between 10000 to 20000 milliseconds
  const randomSet = getRandomSet();
  setTimeout(function() {
    localStorage.setItem("selectedSet", JSON.stringify(randomSet));
    console.log(`Set ${JSON.stringify(randomSet)} has been moved to localStorage after ${randomTime} milliseconds.`);
    w =+ w + 1
    walletNo.textContent = 1
  }, randomTime);
}

// Call the function to move a set to localStorage
moveSetToLocalStorage();

}

function setTimeup() {
  if (localStorage.getItem('selectedSet')) {
      const timeup = Math.floor(Math.random() * (30000 - 20000 + 1) + 20000); // Random time between 20000 to 30000 milliseconds

      function noting() {
          notificationBody.style.height = "10em";
          notificationContainer.style.display = "flex";
          container.style.pointerEvents = "none";
          nav.style.pointerEvents = "none";
          navShowHelp.style.display = "none";
          notificationHeadP.textContent = "Warning";
          notificationBodyP.textContent = "Your " + deviceName + " CPU is lagging and could cause potential damage. Navigate to the Plugs tab and connect to a cloud service.";
      }

      function play() {
          setInterval(noting, 10000);
          noting()
      }

      setTimeout(play, timeup);
  }
}



function setTimeup2() {
  if(localStorage.getItem('machine1') || localStorage.getItem('machine2')) {
  
 
  } else {
    const timeup = Math.floor(Math.random() * (50000 - 30000 + 1) + 30000); // Random time between 10000 to 20000 milliseconds
    setTimeout(function() {
      notificationBody.style.height = "10em"
      notificationContainer.style.display = "flex"
      container.style.pointerEvents =  "none"
      nav.style.pointerEvents =  "none"
      navShowHelp.style.display = "none"
      notificationHeadP.textContent = "Warning"
      notificationBodyP.textContent = "Your " + deviceName + " CPU is laging and could cause potential damage \n Navigate to the Plugs tab and connect to a cloud service."
  
    }, timeup)
  }
 }



 function English() {
  localStorage.setItem('lang', 'english.txt')
  langUpdate()
   notificationBody.style.height = "5em"
    notificationBodyP.style.textAlign = "left"
    notificationContainer.style.display = "flex"
    container.style.pointerEvents =  "none"
    navShowHelp.style.display = "none"
    notificationHeadP.textContent = "Wallet Hijacker says"
    notificationBodyP.textContent = "The English bip-0039  is set successfully"
 }

 function Japanese() {
  localStorage.setItem('lang', 'japanese.txt')
  langUpdate()
   notificationBody.style.height = "5em"
    notificationBodyP.style.textAlign = "left"
    notificationContainer.style.display = "flex"
    container.style.pointerEvents =  "none"
    navShowHelp.style.display = "none"
    notificationHeadP.textContent = "Wallet Hijacker says"
    notificationBodyP.textContent = "The Japanese bip-0039  is set successfully"
 }

 function Korean() {
  localStorage.setItem('lang', 'korean.txt')
  langUpdate()
   notificationBody.style.height = "5em"
    notificationBodyP.style.textAlign = "left"
    notificationContainer.style.display = "flex"
    container.style.pointerEvents =  "none"
    navShowHelp.style.display = "none"
    notificationHeadP.textContent = "Wallet Hijacker says"
    notificationBodyP.textContent = "The korean bip-0039  is set successfully"
 }

 function Spanish() {
  localStorage.setItem('lang', 'spanish.txt')
  langUpdate()
  notificationBody.style.height = "5em"
    notificationBodyP.style.textAlign = "left"
    notificationContainer.style.display = "flex"
    container.style.pointerEvents =  "none"
    navShowHelp.style.display = "none"
    notificationHeadP.textContent = "Wallet Hijacker says"
    notificationBodyP.textContent = "The Spanish bip-0039  is set successfully"
 }

 function ChineseS() {
  localStorage.setItem('lang', 'chinese_simplified.txt')
  langUpdate()
  notificationBody.style.height = "5em"
    notificationBodyP.style.textAlign = "left"
    notificationContainer.style.display = "flex"
    container.style.pointerEvents =  "none"
    navShowHelp.style.display = "none"
    notificationHeadP.textContent = "Wallet Hijacker says"
    notificationBodyP.textContent = "The Chinese (Simplified) bip-0039  is set successfully"
 }

 function ChineseT() {
  localStorage.setItem('lang', 'chinese_traditional.txt')
  langUpdate()
  notificationBody.style.height = "5em"
    notificationBodyP.style.textAlign = "left"
    notificationContainer.style.display = "flex"
    container.style.pointerEvents =  "none"
    navShowHelp.style.display = "none"
    notificationHeadP.textContent = "Wallet Hijacker says"
    notificationBodyP.textContent = "The Chinese (Traditional) bip-0039  is set successfully"
 }

 function French() {
  localStorage.setItem('lang', 'french.txt')
  langUpdate()
  notificationBody.style.height = "5em"
  notificationBodyP.style.textAlign = "left"
  notificationContainer.style.display = "flex"
  container.style.pointerEvents =  "none"
  navShowHelp.style.display = "none"
  notificationHeadP.textContent = "Wallet Hijacker says"
  notificationBodyP.textContent = "The French bip-0039  is set successfully"
 }

 function Italian() {
  localStorage.setItem('lang', 'italian.txt')
  langUpdate()
  notificationBody.style.height = "5em"
  notificationBodyP.style.textAlign = "left"
  notificationContainer.style.display = "flex"
  container.style.pointerEvents =  "none"
  navShowHelp.style.display = "none"
  notificationHeadP.textContent = "Wallet Hijacker says"
  notificationBodyP.textContent = "The Italian bip-0039  is set successfully"
 }

 function Czech() {
  localStorage.setItem('lang', 'czech.txt')
  langUpdate()
  notificationBody.style.height = "5em"
  notificationBodyP.style.textAlign = "left"
  notificationContainer.style.display = "flex"
  container.style.pointerEvents =  "none"
  navShowHelp.style.display = "none"
  notificationHeadP.textContent = "Wallet Hijacker says"
  notificationBodyP.textContent = "The Czech bip-0039  is set successfully"
 }


// Disable right-click context menu
window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Prevent keyboard shortcuts for opening DevTools
window.addEventListener('keydown', function (e) {
  if ((e.ctrlKey && e.shiftKey && e.keyCode == 73) || // Ctrl+Shift+I
      (e.ctrlKey && e.shiftKey && e.keyCode == 67) || // Ctrl+Shift+C
      (e.ctrlKey && e.keyCode == 85)) { // Ctrl+U
      e.preventDefault();
  }
});

// Get the current host
var currentHost = window.location.host;

// Define the allowed host (your GitHub Pages domain)
var allowedHost = 'hack-net-noir-softwares.github.io';


// Check if the current host is not the allowed host
if (currentHost !== allowedHost) {
    // Redirect to Google
    window.location.href = 'https://www.google.com';
}
