import { Request, NextFunction } from "express";
import { assetlayer } from "../../server";
import { CustomResponse } from "../../types/basic-types";
import { AssetInfoProps, AssetSendProps, AssetUpdateProps, AssetUserProps, GetAssetHistoryProps, GetAssetOwnershipHistoryProps, GetUserCollectionAssetsProps, GetUserCollectionsAssetsProps, GetUserSlotAssetsProps, GetUserSlotsAssetsProps, MintAssetsProps, SendAssetProps, SendAssetsProps, SendCollectionAssetsProps, UpdateAssetProps, UpdateAssetsProps, UpdateCollectionAssetsProps } from "@assetlayer/sdk/dist/types/asset";
import { IncomingHttpHeaders } from "http";
import { formatIncomingHeaders } from "../../utils/basic-format";
import { BasicError } from "@assetlayer/sdk";

type AssetInfoRequest = Request<{},{},AssetInfoProps,AssetInfoProps>;
export const info = async (req: AssetInfoRequest, res: CustomResponse, next: NextFunction) => {
  try {
    const { assetId, assetIds } = { ...req.body, ...req.query };

    if (!(assetId || assetIds)) throw new BasicError('Missing assetId(s)', 400);

    const response = await assetlayer.assets.raw.info({ assetId, assetIds });

    return res.json(response);
  }
  catch (e) {
    return next(e);
  }
}

type AssetUserRequest = Request<{},{},AssetUserProps,AssetUserProps>;
export const user = async (req: AssetUserRequest, res: CustomResponse, next: NextFunction) => {
  try {
    const headers = formatIncomingHeaders(req.headers);
    const { walletUserId, idOnly } = { ...req.body, ...req.query };

    const response = await assetlayer.assets.raw.user({ walletUserId, idOnly }, headers);

    return res.json(response);
  }
  catch (e) {
    return next(e);
  }
}

type GetUserCollectionAssetsRequest = Request<{},{},GetUserCollectionAssetsProps,GetUserCollectionAssetsProps>;
export const getUserCollectionAssets = async (req: GetUserCollectionAssetsRequest, res: CustomResponse, next: NextFunction) => {
  try {
    const headers = formatIncomingHeaders(req.headers);
    const { collectionId, walletUserId, serials, range, idOnly, countsOnly } = { ...req.body, ...req.query };

    const response = await assetlayer.assets.raw.getUserCollectionAssets({ collectionId, walletUserId, serials, range, idOnly, countsOnly }, headers);

    return res.json(response);
  }
  catch (e) {
    return next(e);
  }
}

type GetUserCollectionsAssetsRequest = Request<{},{},GetUserCollectionsAssetsProps,GetUserCollectionsAssetsProps>;
export const getUserCollectionsAssets = async (req: GetUserCollectionsAssetsRequest, res: CustomResponse, next: NextFunction) => {
  try {
    const headers = formatIncomingHeaders(req.headers);
    const { collectionIds, walletUserId, idOnly, countsOnly } = { ...req.body, ...req.query };

    const response = await assetlayer.assets.raw.getUserCollectionsAssets({ collectionIds, walletUserId, idOnly, countsOnly }, headers);

    return res.json(response);
  }
  catch (e) {
    return next(e);
  }
}

type GetUserSlotAssetsRequest = Request<{},{},GetUserSlotAssetsProps,GetUserSlotAssetsProps>;
export const getUserSlotAssets = async (req: GetUserSlotAssetsRequest, res: CustomResponse, next: NextFunction) => {
  try {
    const headers = formatIncomingHeaders(req.headers);
    const { slotId, walletUserId, idOnly, countsOnly } = { ...req.body, ...req.query };

    const response = await assetlayer.assets.raw.getUserSlotAssets({ slotId, walletUserId, idOnly, countsOnly }, headers);

    return res.json(response);
  }
  catch (e) {
    return next(e);
  }
}

type GetUserSlotsAssetsRequest = Request<{},{},GetUserSlotsAssetsProps,GetUserSlotsAssetsProps>;
export const getUserSlotsAssets = async (req: GetUserSlotsAssetsRequest, res: CustomResponse, next: NextFunction) => {
  try {
    const headers = formatIncomingHeaders(req.headers);
    const { slotIds, walletUserId, includeDeactivated, idOnly, countsOnly } = { ...req.body, ...req.query };

    const response = await assetlayer.assets.raw.getUserSlotsAssets({ slotIds, walletUserId, includeDeactivated, idOnly, countsOnly }, headers);

    return res.json(response);
  }
  catch (e) {
    return next(e);
  }
}

type GetAssetHistoryRequest = Request<{},{},GetAssetHistoryProps,GetAssetHistoryProps>;
export const getAssetHistory = async (req: GetAssetHistoryRequest, res: CustomResponse, next: NextFunction) => {
  try {
    const headers = formatIncomingHeaders(req.headers);
    const { assetId, limit, start } = { ...req.body, ...req.query };

    const response = await assetlayer.assets.raw.getAssetHistory({ assetId, limit, start }, headers);

    return res.json(response);
  }
  catch (e) {
    return next(e);
  }
}

type GetAssetMarketHistoryRequest = Request<{},{},GetAssetHistoryProps,GetAssetHistoryProps>;
export const getAssetMarketHistory = async (req: GetAssetMarketHistoryRequest, res: CustomResponse, next: NextFunction) => {
  try {
    const headers = formatIncomingHeaders(req.headers);
    const { assetId, limit, start } = { ...req.body, ...req.query };

    const response = await assetlayer.assets.raw.getAssetMarketHistory({ assetId, limit, start }, headers);

    return res.json(response);
  }
  catch (e) {
    return next(e);
  }
}

type GetAssetOwnershipHistoryRequest = Request<{},{},GetAssetOwnershipHistoryProps,GetAssetOwnershipHistoryProps>;
export const getAssetOwnershipHistory = async (req: GetAssetOwnershipHistoryRequest, res: CustomResponse, next: NextFunction) => {
  try {
    const headers = formatIncomingHeaders(req.headers);
    const { assetId, limit, start, ownersOnly } = { ...req.body, ...req.query };

    const response = await assetlayer.assets.raw.getAssetOwnershipHistory({ assetId, limit, start, ownersOnly }, headers);

    return res.json(response);
  }
  catch (e) {
    return next(e);
  }
}

type MintAssetsRequest = Request<{},{},MintAssetsProps>;
export const mintAssets = async (req: MintAssetsRequest, res: CustomResponse, next: NextFunction) => {
  try {
    const headers = formatIncomingHeaders(req.headers);
    const { collectionId, number, mintTo, walletUserId, includeAssetIds } = req.body;

    const response = await assetlayer.assets.raw.mint({ collectionId, number, mintTo, walletUserId, includeAssetIds }, headers);

    return res.json(response);
  }
  catch (e) {
    return next(e);
  }
}

type AssetSendRequest = Request<{},{},AssetSendProps>;
export const send = async (req: AssetSendRequest, res: CustomResponse, next: NextFunction) => {
  try {
    const headers = formatIncomingHeaders(req.headers);
    const { receiver, walletUserId, assetId, assetIds, collectionId } = req.body;

    if (!(assetId || assetIds || collectionId)) throw new BasicError('Missing assetId(s) or collectionId', 400);

    const response = await assetlayer.assets.raw.send({ receiver, walletUserId, assetId, assetIds, collectionId }, headers);

    return res.json(response);
  }
  catch (e) {
    return next(e);
  }
}

type SendLowestAssetRequest = Request<{},{},SendCollectionAssetsProps>;
export const sendLowestAsset = async (req: SendLowestAssetRequest, res: CustomResponse, next: NextFunction) => {
  try {
    const headers = formatIncomingHeaders(req.headers);
    const { receiver, collectionId, walletUserId } = req.body;

    const response = await assetlayer.assets.raw.sendLowestAsset({ receiver, collectionId, walletUserId }, headers);

    return res.json(response);
  }
  catch (e) {
    return next(e);
  }
}

type SendRandomAssetRequest = Request<{},{},SendCollectionAssetsProps>;
export const sendRandomAsset = async (req: SendRandomAssetRequest, res: CustomResponse, next: NextFunction) => {
  try {
    const headers = formatIncomingHeaders(req.headers);
    const { receiver, collectionId, walletUserId } = req.body;

    const response = await assetlayer.assets.raw.sendRandomAsset({ receiver, collectionId, walletUserId }, headers);

    return res.json(response);
  }
  catch (e) {
    return next(e);
  }
}

type AssetUpdateRequest = Request<{},{},AssetUpdateProps>;
export const update = async (req: AssetUpdateRequest, res: CustomResponse, next: NextFunction) => {
  try {
    const headers = formatIncomingHeaders(req.headers);
    const { properties, assetId, assetIds, collectionId } = req.body;
    
    if (!(assetId || assetIds || collectionId)) throw new BasicError('Missing assetId(s) or collectionId', 400);

    const response = await assetlayer.assets.raw.update({ properties, assetId, assetIds, collectionId }, headers);

    return res.json(response);
  }
  catch (e) {
    return next(e);
  }
}
