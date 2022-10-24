export interface Internal {
  pubDateTime: string;
  igorPath: string;
  xslt: string;
  xsltForceRecompile: string;
  xsltInCache: string;
  xsltCompileTimeMillis: string;
  xsltTransformTimeMillis: string;
  consolidatedDomKey: string;
  endToEndTimeMillis: string;
}

export interface Period {
  current: number;
  type: number;
  maxRegular: number;
}

export interface Nugget {
  text: string;
}

export interface HTeam {
  teamId: string;
  score: string;
  win: string;
  loss: string;
}

export interface VTeam {
  teamId: string;
  score: string;
  win: string;
  loss: string;
}

export interface Broadcaster {
  shortName: string;
  longName: string;
}

export interface National {
  broadcasters: Broadcaster[];
}

export interface Canadian {
  shortName: string;
  longName: string;
}

export interface Video {
  regionalBlackoutCodes: string;
  isLeaguePass: boolean;
  isNationalBlackout: boolean;
  isTNTOT: boolean;
  canPurchase: boolean;
  isVR: boolean;
  isNextVR: boolean;
  isNBAOnTNTVR: boolean;
  isMagicLeap: boolean;
  isOculusVenues: boolean;
  national: National;
  canadian: Canadian[];
  spanish_national: any[];
}

export interface Broadcast {
  video: Video;
}

export interface Watch {
  broadcast: Broadcast;
}

export interface Liga {
  gameId: string;
  seasonStageId: number;
  gameUrlCode: string;
  statusNum: number;
  extendedStatusNum: number;
  isStartTimeTBD: boolean;
  startTimeUTC: Date;
  startDateEastern: string;
  isNeutralVenue: boolean;
  startTimeEastern: string;
  isBuzzerBeater: boolean;
  period: Period;
  nugget: Nugget;
  hTeam: HTeam;
  vTeam: VTeam;
  watch: Watch;
}

export interface League {
  standard: Liga[];
  africa: Liga[];
  sacramento: Liga[];
  vegas: Liga[];
  utah: Liga[];
}

export interface ScheduleResponse {
  _internal: Internal;
  league: League;
}
