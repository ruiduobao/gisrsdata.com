---
title: "USGS Landsat 5 二级 Collection 2 Tier 1"
date: 2026-11-03 12:00:00
permalink: /pages/02094cb5/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "cfmask"
  - "cloud"
  - "fmask"
  - "global"
  - "landsat"
  - "lasrc"
  - "lst"
  - "lt05"
  - "reflectance"
  - "satellite-imagery"
  - "sr"
  - "tm"
---

# USGS Landsat 5 二级 Collection 2 Tier 1

英文原名：USGS Landsat 5 Level 2, Collection 2, Tier 1

## 这是什么数据

本数据集包含由 Landsat TM 传感器数据推导的大气校正地表反射率与地表温度。这些影像包含 4 个可见光与近红外（VNIR）波段和 2 个短波红外（SWIR）波段（处理为正射校正地表反射率），以及一个热红外（TIR）波段（处理为正射校正地表温度）。它们还包含 ST 产品计算中使用的中间波段以及 QA 波段。

Landsat 4 与 5 地表反射率产品用 Landsat 生态系统干扰自适应处理系统（LEDAPS）算法（版本 3.4.0）创建。所有 Collection 2 地表温度产品用罗切斯特理工学院（RIT）与美国国家航空航天局（NASA）喷气推进实验室（JPL）联合创建的单通道算法创建。

收集的数据条带被打包为重叠的「景」，使用[标准化参考网格](https://landsat.gsfc.nasa.gov/about/worldwide-reference-system)覆盖约 170 公里 × 183 公里。

某些资产只有地表反射率数据，此时地表温度波段存在但为空。对同时具有地表温度与地表反射率波段的资产，'PROCESSING_LEVEL' 设为 'L2SP'。对只有地表反射率波段的资产，'PROCESSING_LEVEL' 设为 'L2SR'。

[更多文档与使用示例。](/earth-engine/guides/landsat)

Landsat Collection 2 文件在 [Google Cloud Storage 存储桶](https://console.cloud.google.com/storage/browser/gee-public-data-landsat)中公开提供，采用请求者付费方式。这些文件被索引在一个定期更新的 BigQuery 表中以便分析：[earth-engine-public-data.geo_index.landsat_c2_index](https://console.cloud.google.com/bigquery?project=earth-engine-public-data&earth-engine-public-data!2sgeo_index=&inv=1&invt=Ab4V5A&ws=!1m5!1m4!4m3!1searth-engine-public-data!2sgeo_index!3slandsat_c2_index)。

数据提供方说明：

* 数据产品必须同时包含光学与热红外数据才能成功处理为地表温度，因为需要 ASTER NDVI 将 ASTER GED 产品在时间上调整到目标 Landsat 景。因此，夜间获取的影像无法处理为地表温度。

* 地表温度反演相对于云（并可能包括云影）存在已知误差。这些问题的特征已由 [Cook et al., (2014)](https://doi.org/10.3390/rs61111244) 记录。

* ASTER GED 包含成功生成地表温度产品所需的平均发射率数据缺失的区域。如果 ASTER GED 信息缺失，这些区域将缺少地表温度数据。

* ASTER GED 数据集由 2000 年至 2008 年间获取的 ASTER 影像的所有晴空像元创建。虽然该数据集空间范围为全球，但由于 ASTER 测量中持续的云污染，有些区域缺少平均发射率信息。

* USGS 进一步筛除 ASTER GED 中不物理的值（发射率 < 0.6），以去除未检测到的云导致的发射率低估。对任何没有 ASTER GED 输入或发射率值不物理的像元，所得 Landsat 地表温度产品都会有缺失像元。鉴于 ASTER GED 平均气候学数据的静态性质，缺失的 Landsat 地表温度像元在时间上将保持一致（1982 年至今）。更多信息参考 [landsat-collection-2-surface-temperature-data-gaps-due-missing](https://www.usgs.gov/landsat-missions/landsat-collection-2-surface-temperature-data-gaps-due-missing-aster-ged)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：1984 年至 2012 年；分辨率：30 米。
- 时间范围：1984-03-16 至 2012-05-05

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| SR_B1 | 波段 1（蓝）地表反射率。 | 30 | 0.45-0.52 &mu;m |
| SR_B2 | 波段 2（绿）地表反射率。 | 30 | 0.52-0.60 &mu;m |
| SR_B3 | 波段 3（红）地表反射率。 | 30 | 0.63-0.69 &mu;m |
| SR_B4 | 波段 4（近红外）地表反射率。 | 30 | 0.77-0.90 &mu;m |
| SR_B5 | 波段 5（短波红外 1）地表反射率。 | 30 | 1.55-1.75 &mu;m |
| SR_B7 | 波段 7（短波红外 2）地表反射率。 | 30 | 2.08-2.35 &mu;m |
| SR_ATMOS_OPACITY | LEDAPS 生成的大气不透明度的一般解释，基于景内暗密植被（DDV）上观测的辐射。大气不透明度的一般解释是：数值（应用 0.001 缩放后）小于 0.1 为晴空，0.1–0.3 为平均，大于 0.3 表示霾或其他云况。大气不透明度高的像元的地表反射率值可靠性较低，尤其在太阳天顶角大的条件下。SR_ATMOS_OPACITY 波段供高级用户与产品质量评估使用，尚未经验证。建议大多数用户改用 QA_PIXEL 波段信息进行云判别。 | 30 |  |
| SR_CLOUD_QA | 云质量评估。 | 30 |  |
| ST_B6 | 波段 6 地表温度。若 'PROCESSING_LEVEL' 设为 'L2SR'，该波段被完全掩膜。 | 30 | 10.40-12.50 &mu;m |
| ST_ATRAN | 大气透过率。若 'PROCESSING_LEVEL' 设为 'L2SR'，该波段被完全掩膜。 | 30 |  |
| ST_CDIST | 像元到云的距离。若 'PROCESSING_LEVEL' 设为 'L2SR'，该波段被完全掩膜。 | 30 |  |
| ST_DRAD | 下行辐射。若 'PROCESSING_LEVEL' 设为 'L2SR'，该波段被完全掩膜。 | 30 |  |
| ST_EMIS | 由 ASTER GED 估计的发射率。若 'PROCESSING_LEVEL' 设为 'L2SR'，该波段被完全掩膜。 | 30 |  |
| ST_EMSD | 发射率标准差。若 'PROCESSING_LEVEL' 设为 'L2SR'，该波段被完全掩膜。 | 30 |  |
| ST_QA | 地表温度波段的不确定性。若 'PROCESSING_LEVEL' 设为 'L2SR'，该波段被完全掩膜。 | 30 |  |
| ST_TRAD | 转换为辐射的热红外波段。若 'PROCESSING_LEVEL' 设为 'L2SR'，该波段被完全掩膜。 | 30 |  |
| ST_URAD | 上行辐射。若 'PROCESSING_LEVEL' 设为 'L2SR'，该波段被完全掩膜。 | 30 |  |
| QA_PIXEL | 由 CFMASK 算法生成的像元质量属性。 | 30 |  |
| QA_RADSAT | 辐射饱和 QA。 | 30 |  |

## 能拿来做什么

- Landsat 影像检索与分析
- 地表反射率与地表温度应用
- 长时间序列土地覆盖监测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2');
```

- 数据集编号（Earth Engine ID）：`LANDSAT/LT05/C02/T1_L2`
- 提供方：USGS、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LT05_C02_T1_L2

## 许可与引用

- 许可：proprietary
- 关键词：cfmask, cloud, fmask, global, landsat, lasrc, lst, lt05, reflectance, satellite-imagery, sr, tm, usgs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [USGS Landsat 5 Level 2, Collection 2, Tier 2](/pages/d3ac795f/)
- [USGS Landsat 5 TM Collection 2 Tier 1 Raw Scenes](/pages/c53a9c3b/)
- [USGS Landsat 5 TM Collection 2 Tier 1 TOA Reflectance](/pages/90bf05da/)
- [USGS Landsat 5 TM Collection 2 Tier 2 Raw Scenes](/pages/9a9bba5e/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
