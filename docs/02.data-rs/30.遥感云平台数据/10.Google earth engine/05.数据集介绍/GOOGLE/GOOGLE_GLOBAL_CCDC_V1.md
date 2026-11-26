---
title: "Google 全球 Landsat CCDC 分段（1999–2019）"
date: 2026-11-03 12:00:00
permalink: /pages/565d06a2/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "change-detection"
  - "google"
  - "landcover"
  - "landsat-derived"
  - "landuse"
  - "landuse-landcover"
---

# Google 全球 Landsat CCDC 分段（1999–2019）

英文原名：Google Global Landsat-based CCDC Segments (1999-2019)

## 这是什么数据

该集合包含在 20 年 Landsat 地表反射率数据上运行连续变化检测与分类（CCDC）算法得到的预计算结果。CCDC 是一种断点查找算法，使用带动态 RMSE 阈值的谐波拟合来探测时间序列数据中的断点。

该数据集由 Landsat 5、7 和 8 的 Collection-1、Tier-1 地表反射率时间序列创建，使用 1999-01-01 至 2019-12-31 之间的全部白天影像。每景影像都经过预处理：掩膜被识别为云、阴影或雪的像元（依据「pixel_qa」波段）、饱和像元，以及大气不透明度 > 300 的像元（由「sr_atmos_opacity」和「sr_aerosol」波段识别）。南北场景重叠区重复的像元已去重。结果以 2 度瓦片输出，覆盖纬度 -60° 至 +85° 之间的全部陆地。影像可简单地 mosaic() 为一幅全球影像。

CCDC 算法以默认算法参数运行，但 dateFormat 除外：

* tmaskBands: ['green', 'swir'] * minObservations: 6 * chiSquareProbability: 0.99 * minNumOfYearsScaler: 1.33 * dateFormat: 1 (fractional year) * lambda: 20 * maxIterations: 25000

输出中的每个像元使用变长数组编码。每个数组的外层长度（轴 0）对应在该位置找到的断点数量。coefs 波段包含二维数组，每个内层数组包含线性谐波模型 8 个项的缩放因子，顺序为：[offset, t, cos(ωt), sin(ωt), cos(2ωt), sin(2ωt), cos(3ωt), sin(3ωt)]，其中 ω = 2π。模型经缩放后，光学波段产生反射率单位（0.0–1.0），热波段产生开尔文度数（K）/ 100.0。

注意，由于输出波段是数组，只能使用 SAMPLE 金字塔策略进行下采样。在较低缩放级别，结果通常不再代表全分辨率数据，例如由于下采样的掩膜可以看到瓦片边界。因此不建议在低于 240 米/像元的分辨率下使用该数据集。

目前没有向该数据集添加 2019 年之后资产的计划。

## 覆盖范围与时间

- 覆盖范围：全球陆地
- 时间范围：1999-01-01 至 2020-01-01

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| tStart | 包含每个分段开始日期（分数年）的一维数组。 | 30 |  |
| tEnd | 包含每个分段结束日期（分数年）的一维数组。 | 30 |  |
| tBreak | 包含每个分段探测到的断点日期（分数年）的一维数组。 | 30 |  |
| numObs | 包含每个分段中找到的观测数量的一维数组。 | 30 |  |
| changeProb | 探测到的断点为真实断点的伪概率。 | 30 |  |
| BLUE_coefs | 包含蓝光波段谐波模型系数的二维数组（每个分段）。 | 30 |  |
| GREEN_coefs | 包含绿光波段谐波模型系数的二维数组（每个分段）。 | 30 |  |
| RED_coefs | 包含红光波段谐波模型系数的二维数组（每个分段）。 | 30 |  |
| NIR_coefs | 包含近红外波段谐波模型系数的二维数组（每个分段）。 | 30 |  |
| SWIR1_coefs | 包含短波红外波段（1.55μm–1.75μm）谐波模型系数的二维数组（每个分段）。 | 30 |  |
| SWIR2_coefs | 包含短波红外波段（2.09μm–2.35μm）谐波模型系数的二维数组（每个分段）。 | 30 |  |
| TEMP_coefs | 包含热波段谐波模型系数的二维数组（每个分段）。 | 30 |  |
| BLUE_rmse | 包含每个分段蓝光波段模型 RMSE 的一维数组。 | 30 |  |
| GREEN_rmse | 包含每个分段绿光波段模型 RMSE 的一维数组。 | 30 |  |
| RED_rmse | 包含每个分段红光波段模型 RMSE 的一维数组。 | 30 |  |
| NIR_rmse | 包含每个分段近红外波段模型 RMSE 的一维数组。 | 30 |  |
| SWIR1_rmse | 包含每个分段短波红外波段（1.55μm–1.75μm）模型 RMSE 的一维数组。 | 30 |  |
| SWIR2_rmse | 包含每个分段短波红外波段（2.09μm–2.35μm）模型 RMSE 的一维数组。 | 30 |  |
| TEMP_rmse | 包含每个分段热波段模型 RMSE 的一维数组。 | 30 |  |
| BLUE_magnitude | 包含每个分段探测到的蓝光波段断点幅度的一维数组。 | 30 |  |
| GREEN_magnitude | 包含每个分段探测到的绿光波段断点幅度的一维数组。 | 30 |  |
| RED_magnitude | 包含每个分段探测到的红光波段断点幅度的一维数组。 | 30 |  |
| NIR_magnitude | 包含每个分段探测到的近红外波段断点幅度的一维数组。 | 30 |  |
| SWIR1_magnitude | 包含每个分段探测到的短波红外波段（1.55μm–1.75μm）断点幅度的一维数组。 | 30 |  |
| SWIR2_magnitude | 包含每个分段探测到的短波红外波段（2.09μm–2.35μm）断点幅度的一维数组。 | 30 |  |
| TEMP_magnitude | 包含每个分段探测到的热波段断点幅度的一维数组。 | 30 |  |

## 能拿来做什么

- 土地覆盖变化断点探测
- 森林扰动与恢复时间序列分析
- 变化年份制图

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('GOOGLE/GLOBAL_CCDC/V1');
```

- 数据集编号（Earth Engine ID）：`GOOGLE/GLOBAL_CCDC/V1`
- 提供方：Google、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_GLOBAL_CCDC_V1

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：change-detection, google, landcover, landsat-derived, landuse, landuse-landcover
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CSP 全球人类改造指数（gHM）](/pages/1227f44f/)
- [ESA WorldCereal 10 米 v100](/pages/76b102d2/)
- [ESA WorldCereal 活跃耕地 10 米 v100](/pages/dd6f101f/)
- [ESA WorldCover 10 米 v100（2020）](/pages/69070083/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
