import React, {useState} from "react";
import "./App.css";

type Assembly = {
    wheel: Wheel,
    tyre: Tyre,
}

type Wheel = {
    widthInches: number,
}

type Tyre = {
    widthMm: number,
    aspectRatioPercentage: number,
    diameterInches: number,
    brand: string,
    model: string,
}

const newTyre = (width: number, aspectRatio: number, diameter: number, brand: string, model: string): Tyre => {
    return {
        widthMm: width,
        aspectRatioPercentage: aspectRatio,
        diameterInches: diameter,
        brand: brand,
        model: model,
    }
}

const commonWidths: number[] = [
    155, 165, 175, 185, 195, 205, 215, 225, 235, 245, 255,
    265, 275, 285, 295, 305, 315
];

const commonAspectRatios: number[] = [
    25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80
];
const tyreSizes = (diameter: number): Tyre[] => {
    let sizes: Tyre[] = []
    commonWidths.forEach(width => {
        commonAspectRatios.forEach(ar => {
            sizes.push(newTyre(width, ar, diameter, "Generic", ""))
        })
    })
    return sizes
}

const tyreSizesWIP: Tyre[] = [
    // Michelin Pilot Sport 4S (PS4S) Sizes
    newTyre(225, 45, 17, "Michelin", "Pilot Sport 4S"),
    newTyre(235, 45, 17, "Michelin", "Pilot Sport 4S"),
    newTyre(245, 40, 17, "Michelin", "Pilot Sport 4S"),
    newTyre(245, 45, 17, "Michelin", "Pilot Sport 4S"),
    newTyre(265, 40, 17, "Michelin", "Pilot Sport 4S"),
    newTyre(215, 35, 18, "Michelin", "Pilot Sport 4S"),
    newTyre(225, 40, 18, "Michelin", "Pilot Sport 4S"),
    newTyre(225, 45, 18, "Michelin", "Pilot Sport 4S"),
    newTyre(225, 50, 18, "Michelin", "Pilot Sport 4S"),
    newTyre(235, 40, 18, "Michelin", "Pilot Sport 4S"),
    newTyre(235, 45, 18, "Michelin", "Pilot Sport 4S"),
    newTyre(235, 50, 18, "Michelin", "Pilot Sport 4S"),
    newTyre(245, 35, 18, "Michelin", "Pilot Sport 4S"),
    newTyre(245, 40, 18, "Michelin", "Pilot Sport 4S"),
    newTyre(245, 45, 18, "Michelin", "Pilot Sport 4S"),
    newTyre(255, 35, 18, "Michelin", "Pilot Sport 4S"),
    newTyre(255, 40, 18, "Michelin", "Pilot Sport 4S"),
    newTyre(255, 45, 18, "Michelin", "Pilot Sport 4S"),
    newTyre(265, 35, 18, "Michelin", "Pilot Sport 4S"),
    newTyre(265, 40, 18, "Michelin", "Pilot Sport 4S"),
    newTyre(275, 35, 18, "Michelin", "Pilot Sport 4S"),
    newTyre(285, 30, 18, "Michelin", "Pilot Sport 4S"),
    newTyre(285, 35, 18, "Michelin", "Pilot Sport 4S"),
    newTyre(285, 40, 18, "Michelin", "Pilot Sport 4S"),
    newTyre(295, 30, 18, "Michelin", "Pilot Sport 4S"),
    newTyre(295, 45, 18, "Michelin", "Pilot Sport 4S"),

    // Michelin Pilot Sport S 5 (PSS5) Sizes
    newTyre(225, 35, 19, "Michelin", "Pilot Sport S 5"),
    newTyre(225, 40, 19, "Michelin", "Pilot Sport S 5"),
    newTyre(225, 45, 19, "Michelin", "Pilot Sport S 5"),
    newTyre(235, 35, 19, "Michelin", "Pilot Sport S 5"),
    newTyre(235, 40, 19, "Michelin", "Pilot Sport S 5"),
    newTyre(245, 30, 19, "Michelin", "Pilot Sport S 5"),
    newTyre(245, 35, 19, "Michelin", "Pilot Sport S 5"),
    newTyre(245, 40, 19, "Michelin", "Pilot Sport S 5"),
    newTyre(245, 45, 19, "Michelin", "Pilot Sport S 5"),
    newTyre(255, 30, 19, "Michelin", "Pilot Sport S 5"),
    newTyre(255, 35, 19, "Michelin", "Pilot Sport S 5"),
    newTyre(255, 40, 19, "Michelin", "Pilot Sport S 5"),
    newTyre(265, 30, 19, "Michelin", "Pilot Sport S 5"),
    newTyre(265, 35, 19, "Michelin", "Pilot Sport S 5"),
    newTyre(265, 40, 19, "Michelin", "Pilot Sport S 5"),
    newTyre(275, 30, 19, "Michelin", "Pilot Sport S 5"),
    newTyre(275, 35, 19, "Michelin", "Pilot Sport S 5"),
    newTyre(275, 40, 19, "Michelin", "Pilot Sport S 5"),
    newTyre(285, 30, 19, "Michelin", "Pilot Sport S 5"),
    newTyre(285, 35, 19, "Michelin", "Pilot Sport S 5"),
    newTyre(295, 25, 19, "Michelin", "Pilot Sport S 5"),
    newTyre(295, 30, 19, "Michelin", "Pilot Sport S 5"),
    newTyre(295, 35, 19, "Michelin", "Pilot Sport S 5"),
    newTyre(305, 30, 19, "Michelin", "Pilot Sport S 5"),
    newTyre(315, 30, 19, "Michelin", "Pilot Sport S 5"),
    newTyre(325, 30, 19, "Michelin", "Pilot Sport S 5"),
    newTyre(355, 30, 19, "Michelin", "Pilot Sport S 5"),
    newTyre(215, 45, 20, "Michelin", "Pilot Sport S 5"),
    newTyre(225, 35, 20, "Michelin", "Pilot Sport S 5"),
    newTyre(235, 30, 20, "Michelin", "Pilot Sport S 5"),
    newTyre(235, 35, 20, "Michelin", "Pilot Sport S 5"),
    newTyre(235, 40, 20, "Michelin", "Pilot Sport S 5"),
    newTyre(235, 45, 20, "Michelin", "Pilot Sport S 5"),
    newTyre(245, 30, 20, "Michelin", "Pilot Sport S 5"),
    newTyre(245, 35, 20, "Michelin", "Pilot Sport S 5"),
    newTyre(245, 40, 20, "Michelin", "Pilot Sport S 5"),
    newTyre(255, 30, 20, "Michelin", "Pilot Sport S 5"),
    newTyre(255, 35, 20, "Michelin", "Pilot Sport S 5"),
    newTyre(255, 40, 20, "Michelin", "Pilot Sport S 5"),
    newTyre(265, 30, 20, "Michelin", "Pilot Sport S 5"),
    newTyre(265, 35, 20, "Michelin", "Pilot Sport S 5"),
    newTyre(265, 40, 20, "Michelin", "Pilot Sport S 5"),
    newTyre(275, 30, 20, "Michelin", "Pilot Sport S 5"),
    newTyre(275, 35, 20, "Michelin", "Pilot Sport S 5"),
    newTyre(285, 25, 20, "Michelin", "Pilot Sport S 5"),
    newTyre(285, 30, 20, "Michelin", "Pilot Sport S 5"),
    newTyre(285, 35, 20, "Michelin", "Pilot Sport S 5"),
    newTyre(295, 25, 20, "Michelin", "Pilot Sport S 5"),
    newTyre(295, 30, 20, "Michelin", "Pilot Sport S 5"),
];

const calculateIdealWidth = (tyreWidthMm: number): number => {
    return (tyreWidthMm / 25.4) * 0.85;
};

const determineStretchCoefficient = (wheelWidth: number, idealWidth: number): number => {
    let widthDifference = wheelWidth - idealWidth;

    if (widthDifference > 0) { // Stretching
        return -0.2 - 0.05 * widthDifference; // More stretch, more negative
    } else if (widthDifference < 0) { // Pinching
        return 0.2 + 0.05 * (-widthDifference); // More pinch, more positive
    }
    return 0; // No change if it's exactly ideal width
};

const calculateOverallDiameter = (assembly: Assembly): number => {
    let wheelDiameterMm = assembly.tyre.diameterInches * 25.4;
    let sidewallHeightMm = assembly.tyre.widthMm * assembly.tyre.aspectRatioPercentage / 100;

    let idealWidthInches = calculateIdealWidth(assembly.tyre.widthMm);
    let stretchCoefficient = determineStretchCoefficient(assembly.wheel.widthInches, idealWidthInches);
    let adjustedSidewallHeightMm = sidewallHeightMm * (1 + stretchCoefficient * ((assembly.wheel.widthInches - idealWidthInches) / idealWidthInches));

    return wheelDiameterMm + (2 * adjustedSidewallHeightMm);
};

const calculateAdjustedWidth = (tyreWidthMm: number, wheelWidth: number, idealWidth: number): number => {
    const widthAdjustmentCoefficient = 0.25; // Empirical adjustment factor
    return tyreWidthMm * (1 + widthAdjustmentCoefficient * ((wheelWidth - idealWidth) / idealWidth));
};

const calculateTyreSpecs = (assembly: Assembly) => {
    let idealWidthInches = calculateIdealWidth(assembly.tyre.widthMm);
    let adjustedTyreWidthMm = calculateAdjustedWidth(assembly.tyre.widthMm, assembly.wheel.widthInches, idealWidthInches);
    let overallDiameterMm = calculateOverallDiameter(assembly);

    return {
        adjustedTyreWidthMm,
        overallDiameterMm
    };
};


const findClosestTyreCombinations = (assembly: Assembly): Assembly[] => {
    let assemblyOverallDiameter = calculateOverallDiameter(assembly)
    return tyreSizes(assembly.tyre.diameterInches)
        .filter(tyre => tyre.diameterInches == assembly.tyre.diameterInches)
        .map(tyre => {
            return {
                tyre: tyre,
                overallDiameter: calculateOverallDiameter({
                    wheel: assembly.wheel,
                    tyre: tyre,
                })
            }
        })
        .sort((a, b) => {
            if (a.overallDiameter > b.overallDiameter) {
                return 1;
            }
            if (a.overallDiameter < b.overallDiameter) {
                return -1;
            }
            return 0
        })
        .filter(val => {
            const lowerBound = assemblyOverallDiameter * (1 - 3 / 100);
            const upperBound = assemblyOverallDiameter * (1 + 3 / 100);
            return val.overallDiameter >= lowerBound && val.overallDiameter <= upperBound
        })
        .filter(val => val.tyre.widthMm >= assembly.tyre.widthMm)
        .map((val): Assembly => {
            return {
                wheel: assembly.wheel,
                tyre: val.tyre,
            }
        })
}


const ReferenceTyre = (props: {
    assembly: Assembly,
    onChange: (val: Assembly) => void,
}) => {
    return (
        <div>
            Wheel Width: <input type={"text"} value={props.assembly.wheel.widthInches}
                                onChange={e => props.onChange({
                                    ...props.assembly,
                                    wheel: {
                                        ...props.assembly.wheel,
                                        widthInches: e.target.value,
                                    }
                                })}

        /><br/>
            Tyre:
            <input type={"text"} value={props.assembly.tyre.widthMm} maxLength={3}
                   onChange={e => props.onChange({
                       ...props.assembly,
                       tyre: {
                           ...props.assembly.tyre,
                           widthMm: e.target.value,
                       }
                   })
                   }/> /
            <input type={"text"} value={props.assembly.tyre.aspectRatioPercentage} maxLength={2}
                   onChange={e => props.onChange({
                       ...props.assembly,
                       tyre: {
                           ...props.assembly.tyre,
                           aspectRatioPercentage: e.target.value,
                       }
                   })}
            /> /
            <input type={"text"} value={props.assembly.tyre.diameterInches} maxLength={2}
                   onChange={e => props.onChange({
                       ...props.assembly,
                       tyre: {
                           ...props.assembly.tyre,
                           diameterInches: e.target.value,
                       }
                   })}
            />
        </div>
    )
}

const App = () => {

    const [refFront, setRefFront] = useState<Assembly>({
        tyre: {
            widthMm: 245,
            aspectRatioPercentage: 35,
        },
        wheel: {
            diameterInches: 19,
            widthInches: 9,
        }
    })

    const [refRear, setRefRear] = useState<Assembly>({
        tyre: {
            widthMm: 265,
            aspectRatioPercentage: 35,
        },
        wheel: {
            diameterInches: 19,
            widthInches: 10,
        }
    })

    return (
        <div>
            <h1>Tyre Size Calculator</h1>
            <div>
                <div>
                    Front reference (ODmm: {calculateOverallDiameter(refFront)}, Wmm: {calculateTyreSpecs(refFront).adjustedTyreWidthMm})
                    <ReferenceTyre assembly={refFront} onChange={setRefFront}/>
                    <br />
                </div>
                <div>
                    Rear reference (ODmm: {calculateOverallDiameter(refRear)}, Wmm: {calculateTyreSpecs(refRear).adjustedTyreWidthMm})
                    <ReferenceTyre assembly={refRear} onChange={setRefRear}/>
                    <br />
                </div>
            </div>
            <div>
                <div>
                    Front alternatives
                    {findClosestTyreCombinations(refFront).map(comb => (
                        <div>{comb.tyre.brand} {comb.tyre.model} - {comb.tyre.widthMm} / {comb.tyre.aspectRatioPercentage} / {comb.tyre.diameterInches} - ODmm: {calculateOverallDiameter(comb)} - Wmm: {calculateTyreSpecs(comb).adjustedTyreWidthMm}</div>
                    ))}
                    <br />
                </div>
                <div>
                    Rear alternatives
                    {findClosestTyreCombinations(refRear).map(comb => (
                        <div>{comb.tyre.brand} {comb.tyre.model} - {comb.tyre.widthMm} / {comb.tyre.aspectRatioPercentage} / {comb.tyre.diameterInches} - ODmm: {calculateOverallDiameter(comb)} - Wmm: {calculateTyreSpecs(comb).adjustedTyreWidthMm}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default App;