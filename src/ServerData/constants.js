export const API_ADDRESS = 'http://localhost:8080/'

export function getBanksArray() {
    const SAMPLE_BANK1 = { name: 'PEKAO SA', currency: 'PLN', value: '72,45 zł', total: '72,45 zł' }
    const SAMPLE_BANK2 = { name: 'PKO BANK POLSKI', currency: 'USD', value: '3,15 zł', total: '23 $' }
    const SAMPLE_BANK3 = { name: 'SANTANDER POLSKA', currency: 'EUR', value: '4,30 zł', total: '16,85 €' }
    const sampleBanks = []
    sampleBanks.push(SAMPLE_BANK1, SAMPLE_BANK2, SAMPLE_BANK3)
    return sampleBanks
}

export function fetchBanks(total, currency) {
    
}