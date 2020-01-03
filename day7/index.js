const weights = {
    lb: {
        lb: 1,
        oz: 16,
        g: 453.59237,
        kg: 0.45359
    },
    oz: {
        lb: 0.0625,
        oz: 1,
        g: 28.34952,
        kg: 0.02834952
    },
    g: {
        lb: 0.002204623,
        oz: 0.03527396,
        g: 1,
        kg: 0.001
    },
    kg: {
        lb:2.204623,
        oz:35.273969,
        g:1000,
        kg:1
    }
}
/*
Expected Input:
{
    from: {
        unit:"unit-name",
        num:1
    },
    to: {
        unit:"unit-name"
    }
}
*/
function convert(input) {
    return weights[input.from.unit][input.to.unit] * input.from.num
}

const getId = id => document.getElementById(id);

const fromNum = getId('fromNumber')
const fromType = getId('fromType')
const toNum   = getId('toNumber')
const toType = getId('toType')

fromNum.addEventListener('input', () => {
    const convertInput = {
        from: {
            unit:fromType.value,
            num:fromNum.value
        },
        to: {
            unit:toType.value
        }
    }

    const converted = convert(convertInput)

    toNum.value = converted
})

toNum.addEventListener('input', () => {
    const convertInput = {
        from: {
            unit:toType.value,
            num:toNum.value
        },
        to: {
            unit:fromType.value
        }
    }

    const converted = convert(convertInput)

    fromNum.value = converted
})

fromType.addEventListener('change', () => {
    const convertInput = {
        from: {
            unit:fromType.value,
            num:fromNum.value
        },
        to: {
            unit:toType.value
        }
    }

    const converted = convert(convertInput)

    toNum.value = converted
})

toType.addEventListener('change', () => {
    const convertInput = {
        from: {
            unit:fromType.value,
            num:fromNum.value
        },
        to: {
            unit:toType.value
        }
    }

    const converted = convert(convertInput)

    toNum.value = converted
})