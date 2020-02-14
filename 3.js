const cekKoin = (num) => {
    let koin = [25,10,5,1]
    let hitung = 0
    while(num > 0){
        if(num >= koin[0]){
            num = num - koin[0]
            hitung++
        }else if(num >= koin[1]){
            num = num - koin[1]
            hitung++
        }else if(num >= koin[2]){
            num = num - koin[2]
            hitung++
        }else if(num >= koin[3]){
            num = num - koin[3]
            hitung++
        }
    }
    return hitung
}

console.log(cekKoin(49))
console.log(cekKoin(31))
console.log(cekKoin(50))