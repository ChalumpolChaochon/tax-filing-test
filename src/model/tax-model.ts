export class MonthModel{
    monthNum:string = ''
    monthName:string = ''
}

export class YearModel{
    value:string = ''
    label:string = ''
}


export class TaxModel {
    filingType :string = '0'
    month: string = ''
    year: string = ''
    saleAmount: number = null!
    taxAmount: number = null!
    surcharge: number = 0
    penalty: number = 0
    totalAmount: number = 0
}