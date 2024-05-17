import { Router } from 'express';
import { getAssetHistory, getAssetMarketHistory, getAssetOwnershipHistory, getUserCollectionAssets, getUserCollectionsAssets, getUserSlotAssets, getUserSlotsAssets, info, user } from './handlers';
// import { updateBulkExpressionValues, updateExpressionValues } from '../expressions/handlers';

const assetsRouter: Router = Router();

assetsRouter.get('/info', info);
assetsRouter.get('/user', user);
assetsRouter.get('/collection', getUserCollectionAssets);
assetsRouter.get('/collections', getUserCollectionsAssets);
assetsRouter.get('/slot', getUserSlotAssets);
assetsRouter.get('/slots', getUserSlotsAssets);
assetsRouter.get('/history', getAssetHistory);
assetsRouter.get('/marketHistory', getAssetMarketHistory);
assetsRouter.get('/ownershipHistory', getAssetOwnershipHistory);

// assetsRouter.post('/mint', mintAssets);
assetsRouter.post('/send', send);
assetsRouter.post('/sendLowest', sendLowestAsset);
assetsRouter.post('/sendRandom', sendRandomAsset);

// assetsRouter.put('/update', update);

// assetsRouter.post('/expressionValues', updateExpressionValues);
// assetsRouter.post('/expressionValuesBulk', updateBulkExpressionValues);

export default assetsRouter;
