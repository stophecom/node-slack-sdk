/* eslint-disable */
/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// !!! DO NOT EDIT THIS FILE !!!                                                       //
//                                                                                     //
// This file is auto-generated by scripts/generate-web-api-types.sh in the repository. //
// Please refer to the script code to learn how to update the source data.             //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////

import { WebAPICallResult } from '../WebClient';
export type CallsUpdateResponse = WebAPICallResult & {
  ok?:       boolean;
  call?:     Call;
  error?:    string;
  needed?:   string;
  provided?: string;
};

export interface Call {
  id?:                   string;
  date_start?:           number;
  external_unique_id?:   string;
  join_url?:             string;
  channels?:             string[];
  external_display_id?:  string;
  title?:                string;
  desktop_app_join_url?: string;
  users?:                User[];
}

export interface User {
  external_id?:  string;
  avatar_url?:   string;
  display_name?: string;
  slack_id?:     string;
}
