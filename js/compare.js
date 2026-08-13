class Car {
    constructor(model, price, height, vehicleHeight, groundClearance, payload, engine, power, cargoVolume, wheel, image) {
        this.model = model;
        this.price = price;
        this.height = height;
        this.vehicleHeight = vehicleHeight;
        this.groundClearance = groundClearance;
        this.payload = payload;
        this.engine = engine;
        this.power = power;
        this.cargoVolume = cargoVolume;
        this.wheel = wheel;
        this.image = image;
    }
}

const cars = [
    new Car('XL Cabine Simples 2.2 Diesel 4X4 MT 2022', 'R$ 183.850', '511 mm', '1821 mm', '232 mm', '1234 Kg', '2.2', '160 cv', '1420 L', 'Aço Estampado 16"', 'img/XL Cabine.jpg'),
    new Car('XLS 2.2 Diesel 4X4 AT 2022', 'R$ 220.690', '511 mm', '1821 mm', '232 mm', '1076 Kg', '2.2', '160 cv', '1180 L', 'Aço Estampado 16"', 'img/xls 2.2 diesel.jpg'),
    new Car('Storm 3.2 Diesel 4X4 AT 2022', 'R$ 222.790', '511 mm', '1821 mm', '232 mm', '1040 Kg', '3.2', '200 cv', '1180 L', 'Liga Leve 17"', 'img/storm.jpg')
];

let selectedCars = [];

function GetCarArrPosition(car) {
    for (let i = 0; i < selectedCars.length; i++) {
        if (selectedCars[i].model === car.model) {
            return i;
        }
    }
    return -1;
}

function SetCarToCompare(el, carIndex) {
    const car = cars[carIndex];
    if (!car) return;

    const pos = GetCarArrPosition(car);

    if (el.checked) {
        if (selectedCars.length >= 2) {
            alert('Você só pode selecionar no máximo 2 veículos para comparação.');
            el.checked = false;
            return;
        }
        if (pos === -1) {
            selectedCars.push(car);
        }
    } else {
        if (pos !== -1) {
            selectedCars.splice(pos, 1);
        }
    }
}

function ShowCompare() {
    if (selectedCars.length !== 2) {
        alert('É necessário escolher exatamente dois veículos para realizar a comparação.');
        return;
    }

    UpdateCompareTable();
    const compareDiv = document.getElementById('compare');
    if (compareDiv) {
        compareDiv.style.display = 'block';
    }
}

function HideCompare() {
    const compareDiv = document.getElementById('compare');
    if (compareDiv) {
        compareDiv.style.display = 'none';
    }
}

function UpdateCompareTable() {
    if (selectedCars.length < 2) return;

    for (let i = 0; i < 2; i++) {
        const car = selectedCars[i];

        const setInner = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.innerText = val;
        };

        const setImage = (id, src) => {
            const el = document.getElementById(id);
            if (el) el.innerHTML = `<img src="${src}" width="150" />`;
        };

        setImage(`compare_image_${i}`, car.image);
        setInner(`compare_modelo_${i}`, car.model);
        setInner(`compare_alturacacamba_${i}`, car.height);
        setInner(`compare_alturaveiculo_${i}`, car.vehicleHeight);
        setInner(`compare_alturasolo_${i}`, car.groundClearance);
        setInner(`compare_capacidadecarga_${i}`, car.payload);
        setInner(`compare_motor_${i}`, car.engine);
        setInner(`compare_potencia_${i}`, car.power);
        setInner(`compare_volumecacamba_${i}`, car.cargoVolume);
        setInner(`compare_roda_${i}`, car.wheel);
        setInner(`compare_preco_${i}`, car.price);
    }
}