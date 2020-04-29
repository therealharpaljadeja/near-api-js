import BN from 'bn.js';
import { CurrentEpochValidatorInfo, NextEpochValidatorInfo } from './providers/provider';
/** Finds seat price given validators stakes and number of seats.
 *  Calculation follow the spec: https://nomicon.io/Economics/README.html#validator-selection
 * @params validators: current or next epoch validators.
 * @params numSeats: number of seats.
 */
export declare function findSeatPrice(validators: (CurrentEpochValidatorInfo | NextEpochValidatorInfo)[], numSeats: number): BN;
export declare class ChangedValidatorInfo {
    current: CurrentEpochValidatorInfo;
    next: NextEpochValidatorInfo;
    constructor(init?: Partial<ChangedValidatorInfo>);
}
export declare class EpochValidatorsDiff {
    newValidators: NextEpochValidatorInfo[];
    removedValidators: CurrentEpochValidatorInfo[];
    changedValidators: ChangedValidatorInfo[];
    constructor(init?: Partial<EpochValidatorsDiff>);
}
/** Diff validators between current and next epoch.
 * Returns additions, subtractions and changes to validator set.
 * @params
 */
export declare function diffEpochValidators(currentValidators: CurrentEpochValidatorInfo[], nextValidators: NextEpochValidatorInfo[]): EpochValidatorsDiff;
