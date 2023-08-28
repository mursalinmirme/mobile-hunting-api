const loadData = async (searchValue) =>{
    const apiUrl = (`https://openapi.programming-hero.com/api/phones?search=${searchValue || 'iphone'}`);
    const jsonData = await fetch(apiUrl);
    const data = await jsonData.json();
    const phones = data.data;
    console.log(phones)
    displayPhones(phones);
}
// search mobile function 
const searchValue = () =>{
    const SearchIput = document.getElementById('SearchIput').value;
    loadData(SearchIput);
}
searchValue()
// display mobiles
const displayPhones = (phones) =>{
    // console.log(phones)
    const phonesContainer = document.getElementById('phonesContainer')
    phonesContainer.innerHTML = '';
    const showallBtn = document.getElementById('showAllBtn');
    if(phones.length > 12){
        showallBtn.classList.remove('hidden')
    }else{
        showallBtn.classList.add('hidden')

    }
    const phoneSlice = phones.slice(0,12);
    // console.log(phones)
    phoneSlice.forEach(phone => {
       
    const cardDiv = document.createElement('div');
    cardDiv.classList = `p-5 border rounded-lg border-gray-300`;
    cardDiv.innerHTML = `
    <div class="flex py-10 justify-center items-center bg-gray-200">
        <img class="w-[170px] h-[200px] rounded-xl" src="${phone.image}" alt="">
    </div>
    <div class="text-center">
       <h3 class="mt-8 text-2xl font-bold">${phone.phone_name}</h3>
          <p class="text-base mt-4 text-gray-500 px-7">There are many variations of passages of available, but the majority have suffered</p>
             <h4 class="font-bold text-2xl mt-5">$999</h4>
        <button class="bg-sky-500 py-2.5 text-white font-medium mt-5 text-base px-5 rounded-lg border-none outline-none">Show Details</button>
    </div>
    `;
    phonesContainer.appendChild(cardDiv);
    });
}





// loadData();






