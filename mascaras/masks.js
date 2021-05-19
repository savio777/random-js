const phoneInput = document.getElementById("phone");

// (99) 99999 9999
const maskPhone = (phone) => {
  return phone
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1 $2");
  // work only in opera
  //.replace(/(\d{4})\f(\d)(\d{4})/, '$1$2 $3')
  //.replace(/(\ \d{4})\d+?$/, '$1')
};

phoneInput.addEventListener(
  "input",
  (event) => {
    event.target.value = maskPhone(event.target.value);
  },
  false
);

const cpfInput = document.getElementById("cpf");

// 999.999.999-99
const maskCpf = (cpf) => {
  return cpf
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1-$2")
    .replace(/(-\d{2})(\d)/, "$1");
};

cpfInput.addEventListener(
  "input",
  (event) => {
    event.target.value = maskCpf(event.target.value);
  },
  false
);

const cnpjInput = document.getElementById("cnpj");

// 99.999.999/9999-99
const maskCnpj = (cnpj) => {
  return cnpj
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(-\d{2})(\d)/, "$1");
};

cnpjInput.addEventListener(
  "input",
  (event) => {
    event.target.value = maskCnpj(event.target.value);
  },
  false
);

const priceInput = document.getElementById("price");

// 999.999.999,99
const maskPrice = (price) => {
  let newPrice = "";

  if (price.length === 1) {
    newPrice = "0.0" + price;
  } else {
    newPrice = price
      .replace("R$", "")
      .replace(/\s/g, "")
      .replace(".", "")
      .replace(",", ".");
  }

  console.log("sem letras~> ", newPrice);

  const value = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(newPrice);
  console.log("res~> ", value);
  return value;
};

priceInput.addEventListener("input", (event) => {
  event.target.value = maskPrice(event.target.value);
});

// 08/11/1997
const maskDate = (date) => {
  return date
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1");
};

const dateInput = document.getElementById("date");

dateInput.addEventListener(
  "input",
  (event) => {
    event.target.value = maskDate(event.target.value);
  },
  false
);
