export type Position =
  | 'GK'
  | 'SW'
  | 'RWB'
  | 'RB'
  | 'RCB'
  | 'CB'
  | 'LCB'
  | 'LB'
  | 'LWB'
  | 'RDM'
  | 'CDM'
  | 'LDM'
  | 'RM'
  | 'RCM'
  | 'CM'
  | 'LCM'
  | 'LM'
  | 'RAM'
  | 'CAM'
  | 'LAM'
  | 'RF'
  | 'CF'
  | 'LF'
  | 'LS'
  | 'ST'
  | 'RS'
  | 'RW'
  | 'LW';

export type PositionCordType = {
  [key in Position]: {
    x: number;
    y: number;
    nameY: number;
  };
};
