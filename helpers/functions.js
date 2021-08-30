const calculateWeights = function(data){

    const round = (number, dp) => Math.round(number * (10**dp)) / (10**dp);

    const multiplier = (100 + data.hydration + data.yeast + data.salt + data.oil) / 100;

    const flourWeight = round(data.doughWeight / multiplier, 0);
    const waterWeight = round(flourWeight * data.hydration / 100, 0);
    const yeastWeight = round(flourWeight * data.yeast / 100, 1);
    const saltWeight = round(flourWeight * data.salt / 100, 1);
    const oilWeight = round(flourWeight * data.oil / 100, 1);

    const results = {
        flourWeight,
        waterWeight,
        yeastWeight,
        saltWeight,
        oilWeight
    }

    return results;
}

export default calculateWeights;