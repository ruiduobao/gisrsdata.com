---
title: "Landsat 8 二级地表反射率与地表温度数据"
date: 2026-11-03 12:00:00
permalink: /pages/778e3960/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "cfmask"
  - "cloud"
  - "fmask"
  - "global"
  - "l8sr"
  - "landsat"
  - "lasrc"
  - "lc08"
  - "lst"
  - "reflectance"
  - "satellite-imagery"
  - "sr"
---

# Landsat 8 二级地表反射率与地表温度数据

英文原名：USGS Landsat 8 Level 2, Collection 2, Tier 1

## 这是什么数据

这是美国 Landsat 8 卫星拍下的地球照片的"精修版"（Level 2 级产品）。原始卫星照片会受到大气干扰，看起来发灰发雾；这套数据已经做过大气校正，消除了大部分大气影响，得到两个可以直接拿来分析的成果：

- **地表反射率**：地面把阳光反射回来的真实比例，看植被、水体、城市都更准；
- **地表温度**：地面到底有多热，可以用来看城市热岛、土壤干旱等。

数据来自 Landsat 8 上的 OLI 和 TIRS 两个传感器：一幅影像覆盖约 170 公里 × 183 公里的地面，按统一的全球网格分幅（WRS-2）。地表反射率由 LaSRC 算法生成，地表温度由 RIT 与 NASA 喷气推进实验室（JPL）共同开发的单通道算法生成。

使用前要知道的几点限制（来自数据提供方说明）：

- 生成地表温度必须同时有光学和热红外数据，所以**夜间拍摄的影像做不出地表温度**；
- 一些影像只有地表反射率数据，此时温度相关波段虽然在、但内容为空（这类影像 `PROCESSING_LEVEL` 标为 `L2SR`，两者都有时标为 `L2SP`）；
- 地表温度的计算要用到 ASTER GED 发射率数据，全球少数长期多云地区的发射率数据缺失，这些地方的温度波段会有成片空缺，而且空缺位置长期固定；
- 已有研究（Cook et al., 2014）指出，云及其阴影附近的地表温度结果可能存在已知误差。

## 覆盖范围与时间

- 覆盖范围：全球陆地（按 WRS-2 分幅，一幅约 170 公里 × 183 公里）
- 时间范围：2013-03-18 至 2026-10-26

## 分辨率与规格

- 空间分辨率：30 米（一个像元约一个篮球场大小）
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| SR_B1 | 波段 1（海岸/气溶胶，超蓝）地表反射率 | 30 | 0.435-0.451 &mu;m |
| SR_B2 | 波段 2（蓝）地表反射率 | 30 | 0.452-0.512 &mu;m |
| SR_B3 | 波段 3（绿）地表反射率 | 30 | 0.533-0.590 &mu;m |
| SR_B4 | 波段 4（红）地表反射率 | 30 | 0.636-0.673 &mu;m |
| SR_B5 | 波段 5（近红外）地表反射率 | 30 | 0.851-0.879 &mu;m |
| SR_B6 | 波段 6（短波红外 1）地表反射率 | 30 | 1.566-1.651 &mu;m |
| SR_B7 | 波段 7（短波红外 2）地表反射率 | 30 | 2.107-2.294 &mu;m |
| SR_QA_AEROSOL | 气溶胶属性 | 30 |  |
| ST_B10 | 波段 10 地表温度。若 `PROCESSING_LEVEL` 为 `L2SR`，此波段全部被掩膜为空 | 30 | 10.60-11.19 &mu;m |
| ST_ATRAN | 大气透过率。若 `PROCESSING_LEVEL` 为 `L2SR`，此波段全部被掩膜为空 | 30 |  |
| ST_CDIST | 像元到云的距离。若 `PROCESSING_LEVEL` 为 `L2SR`，此波段全部被掩膜为空 | 30 |  |
| ST_DRAD | 下行辐射。若 `PROCESSING_LEVEL` 为 `L2SR`，此波段全部被掩膜为空 | 30 |  |
| ST_EMIS | 波段 10 发射率（由 ASTER GED 估算）。若 `PROCESSING_LEVEL` 为 `L2SR`，此波段全部被掩膜为空 | 30 |  |
| ST_EMSD | 发射率标准差。若 `PROCESSING_LEVEL` 为 `L2SR`，此波段全部被掩膜为空 | 30 |  |
| ST_QA | 地表温度波段的不确定度。若 `PROCESSING_LEVEL` 为 `L2SR`，此波段全部被掩膜为空 | 30 |  |
| ST_TRAD | 热红外波段转换的辐射值。若 `PROCESSING_LEVEL` 为 `L2SR`，此波段全部被掩膜为空 | 30 |  |
| ST_URAD | 上行辐射。若 `PROCESSING_LEVEL` 为 `L2SR`，此波段全部被掩膜为空 | 30 |  |
| QA_PIXEL | 像元质量标记（由 CFMASK 算法生成） | 30 |  |
| QA_RADSAT | 辐射饱和质量标记 | 30 |  |

## 能拿来做什么

- 看植被长势、森林变化和农田分布（反射率波段是计算 NDVI 等植被指数的基础）
- 监测湖泊、河流、洪水等水体范围变化
- 追踪城市扩张、土地利用变化
- 用地表温度看城市热岛、干旱和灌溉效果

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2');
```

- 数据集编号（Earth Engine ID）：`LANDSAT/LC08/C02/T1_L2`
- 提供方：USGS、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LC08_C02_T1_L2
- 原始文件也可在 Google Cloud 的公开存储桶按需付费下载（requester-pays）：[gee-public-data-landsat](https://console.cloud.google.com/storage/browser/gee-public-data-landsat)，并有 BigQuery 索引表 `earth-engine-public-data.geo_index.landsat_c2_index` 可检索

## 许可与引用

- 许可：proprietary
- 关键词：cfmask, cloud, fmask, global, l8sr, landsat, lasrc, lc08, lst, reflectance, satellite-imagery, sr, usgs

## 同类数据

- [USGS Landsat 8 Collection 2 Tier 1 Raw Scenes](/pages/080f10d0/)
- [USGS Landsat 8 Collection 2 Tier 1 TOA Reflectance](/pages/29f40295/)
- [USGS Landsat 8 Collection 2 Tier 1 and Real-Time data Raw Scenes](/pages/46395cc0/)
- [USGS Landsat 8 Collection 2 Tier 1 and Real-Time data TOA Reflectance](/pages/7cb7b9ea/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
