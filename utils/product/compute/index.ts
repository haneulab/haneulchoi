type SectionCharge = 'section'
type HostingCharge = 'hosting'
type DomainCharge = 'domain'
type MaintenanceCharge = 'maintenance'
type BaseChargeCategory = [
    SectionCharge,
    HostingCharge,
    DomainCharge,
    MaintenanceCharge
][number]
type V1RateCharge = 'v1'
type V2RateCharge = 'v2'
type V3RateCharge = 'v3'
type BaseChargeRate = [V1RateCharge, V2RateCharge, V3RateCharge][number]

const UNIT_PRICE_CHART: Record<BaseChargeCategory, number> = {
    section: 50,
    hosting: 40,
    domain: 40,
    maintenance: 40,
}

const RATE_CHART: Record<BaseChargeRate, number> = {
    v1: 1.0,
    v2: 1.35,
    v3: 1.75,
}

class ComputeUniqueProduct {
    public static chargeSection(howMany = 1): number {
        return Number(UNIT_PRICE_CHART.section * howMany)
    }
    public static chargePage(howMany = 1): number {
        const reduceToSectionUnit = 4 * howMany

        return Number(UNIT_PRICE_CHART.section * reduceToSectionUnit)
    }
    public static chargeHosting(): number {
        return Number(UNIT_PRICE_CHART.hosting * RATE_CHART.v1)
    }
    public static chargeDomain(): number {
        return Number(UNIT_PRICE_CHART.domain * RATE_CHART.v1)
    }
    public static chargeMaintenance(): number {
        return Number(UNIT_PRICE_CHART.maintenance * RATE_CHART.v1)
    }
    public static chargeAnnualMaintenance(): number {
        return Number(ComputeVariableProduct.chargeMaintenance('v1') * 12)
    }
}
class ComputeVariableProduct {
    public static chargeSection(howMany = 1): number {
        return Number(UNIT_PRICE_CHART.section * howMany)
    }
    public static chargePage(howMany = 1): number {
        const reduceToSectionUnit = 4 * howMany

        return Number(UNIT_PRICE_CHART.section * reduceToSectionUnit)
    }
    public static chargeHosting(baseChargeOption: BaseChargeRate): number {
        return Number(UNIT_PRICE_CHART.hosting * RATE_CHART[baseChargeOption])
    }
    public static chargeDomain(baseChargeOption: BaseChargeRate): number {
        return Number(UNIT_PRICE_CHART.domain * RATE_CHART[baseChargeOption])
    }
    public static chargeMaintenance(baseChargeOption: BaseChargeRate): number {
        return Number(
            UNIT_PRICE_CHART.maintenance * RATE_CHART[baseChargeOption]
        )
    }
    public static chargeAnnualMaintenance(
        baseChargeOption: BaseChargeRate
    ): number {
        return Number(
            ComputeVariableProduct.chargeMaintenance(baseChargeOption) * 12
        )
    }
}

class Compute {
    public unique = ComputeUniqueProduct
    public variable = ComputeVariableProduct
}

const ComputeProduct = new Compute()

export { ComputeProduct }
