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

export interface Standard {
  isNBAFranchise: boolean;
  isAllStar: boolean;
  city: string;
  altCityName: string;
  fullName: string;
  tricode: string;
  teamId: string;
  nickname: string;
  urlName: string;
  teamShortName: string;
  confName: string;
  divName: string;
}

export interface Africa {
  isNBAFranchise: boolean;
  isAllStar: boolean;
  city: string;
  altCityName: string;
  fullName: string;
  tricode: string;
  teamId: string;
  nickname: string;
  urlName: string;
  teamShortName: string;
  confName: string;
  divName: string;
}

export interface Sacramento {
  isNBAFranchise: boolean;
  isAllStar: boolean;
  city: string;
  altCityName: string;
  fullName: string;
  tricode: string;
  teamId: string;
  nickname: string;
  urlName: string;
  teamShortName: string;
  confName: string;
  divName: string;
}

export interface Vega {
  isNBAFranchise: boolean;
  isAllStar: boolean;
  city: string;
  altCityName: string;
  fullName: string;
  tricode: string;
  teamId: string;
  nickname: string;
  urlName: string;
  teamShortName: string;
  confName: string;
  divName: string;
}

export interface Utah {
  isNBAFranchise: boolean;
  isAllStar: boolean;
  city: string;
  altCityName: string;
  fullName: string;
  tricode: string;
  teamId: string;
  nickname: string;
  urlName: string;
  teamShortName: string;
  confName: string;
  divName: string;
}

export interface League {
  standard: Standard[];
  africa: Africa[];
  sacramento: Sacramento[];
  vegas: Vega[];
  utah: Utah[];
}

export interface TeamResponse {
  _internal: Internal;
  league: League;
}

