/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export function init(appId: number): void
export function runCallbacks(): void
export function activateAchievement(achievement: string): boolean
export function isCloudEnabledForAccount(): boolean
export function isCloudEnabledForApp(): boolean
export function readFile(name: string): string
export function writeFile(name: string, content: string): boolean
export function deleteFile(name: string): boolean
export interface LocalSteamId {
  steamId64: string
  steamId32: string
  accountId: number
}
export function getSteamId(): LocalSteamId
export function getName(): string
export function getLevel(): number
export function getIpCountry(): string
export function getStatInt(name: string): number | undefined | null
export function setStatInt(name: string, value: number): boolean
export function storeStats(): boolean
export function resetAllStats(achievementsToo: boolean): boolean
export interface UgcResult {
  itemId: bigint
  needsToAcceptAgreement: boolean
}
export interface UgcUpdate {
  title?: string | undefined | null
  description?: string | undefined | null
  changeNote?: string | undefined | null
  previewPath?: string | undefined | null
  contentPath?: string | undefined | null
  tags?: Array<string> | undefined | null
}
export function createCommunityItem(): Promise<UgcResult>
export function updateCommunityItem(itemId: bigint, updateDetails: UgcUpdate): Promise<UgcResult>