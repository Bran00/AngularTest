angular.module("cupomApp").controller("CadastroCuponsController", function () {
  this.couponName = ""
  this.discountValue = ""
  this.expiryDate = ""
  this.couponType = "Único"
  this.discountType = "Porcentagem"
  this.minValue = ""

  this.cupons = [
    {
      name: "CUPOM1",
      type: "Único",
      discountType: "Porcentagem",
      minValue: 0,
      discount: "10%",
      expiryDate: new Date("2023-12-31"),
    },
    {
      name: "CUPOM2",
      type: "Geral",
      discountType: "Valor",
      minValue: 50,
      discount: "5",
      expiryDate: new Date("2023-11-30"),
    },
    {
      name: "CUPOM3",
      type: "Geral",
      discountType: "Porcentagem",
      minValue: 0,
      discount: "15%",
      expiryDate: new Date("2023-10-15"),
    },
  ]

  this.cupons.sort(function (a, b) {
    return new Date(a.expiryDate) - new Date(b.expiryDate)
  })

  this.addCoupon = function () {
    if (this.couponName && this.discountValue && this.expiryDate) {
      var newCoupon = {
        name: this.couponName,
        type: this.couponType,
        discountType: this.discountType,
        minValue: this.minValue,
        discount: this.discountValue,
        expiryDate: this.expiryDate,
      }

      this.cupons.push(newCoupon)

      this.cupons.sort(function (a, b) {
        return new Date(a.expiryDate) - new Date(b.expiryDate)
      })

      this.couponName = ""
      this.discountValue = ""
      this.expiryDate = ""
      this.couponType = "Único"
      this.discountType = "Porcentagem"
      this.minValue = ""
    }
  }

  this.deleteCoupon = function (index) {
    this.cupons.splice(index, 1)
  }

  this.couponUsageData = {
    labels: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
    ],
    datasets: [
      {
        label: "Uso de Cupons",
        backgroundColor: "rgba(75, 192, 192, 0.9)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        data: [12, 19, 78, 50, 24, 32, 50, 24, 32],
        barThickness: 30,
      },
    ],
  }
  this.chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 20,
      },
    },
    plugins: {
      title: {
        display: true,
        font: {
          size: 36,
          family: "Inter, sans-serif",
          weight: 600,
          color: "#000",
        },
        text: "Uso de Cupons",
        padding: {
          top: 50,
        },
      },
    },
  }

  var ctx = document.getElementById("cuponChart").getContext("2d")
  var myChart = new Chart(ctx, {
    type: "bar", // Tipo de gráfico de barras
    data: this.couponUsageData,
    options: this.chartOptions,
  })
})
