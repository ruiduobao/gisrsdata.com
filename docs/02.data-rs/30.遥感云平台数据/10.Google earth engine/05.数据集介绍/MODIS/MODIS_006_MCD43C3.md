---
title: "MCD43C3.006 BRDF/反照率日产品 L3 0.05 度 CMG（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/95ebbb0d/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "albedo"
  - "black-sky"
  - "brdf"
  - "daily"
  - "global"
  - "modis"
  - "nasa"
  - "satellite-imagery"
  - "usgs"
  - "white-sky"
---

# MCD43C3.006 BRDF/反照率日产品 L3 0.05 度 CMG（已弃用）

英文原名：MCD43C3.006 BRDF/Albedo Daily L3 0.05 Deg CMG [deprecated]

## 这是什么数据

MCD43C3 版本 6 双向反射分布函数与反照率（BRDF/反照率）反照率数据集使用 16 天 Terra 与 Aqua MODIS 数据在 0.05 度（赤道 5,600 米）气候建模网格（CMG）中每日生产。数据在时间上加权到反演时段的第九天，这反映在文件名中的儒略日期中。本 CMG 产品覆盖全球，供气候模拟模型使用。

MCD43C3 在当地太阳正午提供黑空反照率（方向半球反射率）与白空反照率（双半球反射率）。黑空与白空反照率值作为单独的层提供，涵盖 MODIS 光谱波段 1 至 7 以及可见光、近红外（NIR）与短波波段。连同 20 个反照率层，还有质量、当地太阳正午、更细分辨率输入百分比、雪覆盖与不确定性的辅助层。

更多信息见[数据集用户指南](https://www.umb.edu/spectralmass/terra_aqua_modis/v006/mcd43c3)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2023 年；分辨率：5,600 米。
- 时间范围：2000-02-24 至 2023-02-10

## 分辨率与规格

- 空间分辨率：约 5,600 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Albedo_BSA_Band1 | 波段 1的黑空反照率。 | 5600 | 620-670nm |
| Albedo_BSA_Band2 | 波段 2的黑空反照率。 | 5600 | 841-876nm |
| Albedo_BSA_Band3 | 波段 3的黑空反照率。 | 5600 | 459-479nm |
| Albedo_BSA_Band4 | 波段 4的黑空反照率。 | 5600 | 545-565nm |
| Albedo_BSA_Band5 | 波段 5的黑空反照率。 | 5600 | 1230-1250nm |
| Albedo_BSA_Band6 | 波段 6的黑空反照率。 | 5600 | 1628-1652nm |
| Albedo_BSA_Band7 | 波段 7的黑空反照率。 | 5600 | 2105-2155nm |
| Albedo_BSA_vis | 可见光宽波段的黑空反照率。 | 5600 |  |
| Albedo_BSA_nir | 近红外宽波段的黑空反照率。 | 5600 | 858nm |
| Albedo_BSA_shortwave | 短波宽波段的黑空反照率。 | 5600 |  |
| Albedo_WSA_Band1 | 波段 1的白空反照率。 | 5600 | 620-670nm |
| Albedo_WSA_Band2 | 波段 2的白空反照率。 | 5600 | 841-876nm |
| Albedo_WSA_Band3 | 波段 3的白空反照率。 | 5600 | 459-479nm |
| Albedo_WSA_Band4 | 波段 4的白空反照率。 | 5600 | 545-565nm |
| Albedo_WSA_Band5 | 波段 5的白空反照率。 | 5600 | 1230-1250nm |
| Albedo_WSA_Band6 | 波段 6的白空反照率。 | 5600 | 1628-1652nm |
| Albedo_WSA_Band7 | 波段 7的白空反照率。 | 5600 | 2105-2155nm |
| Albedo_WSA_vis | 可见光宽波段的白空反照率。 | 5600 |  |
| Albedo_WSA_nir | 近红外宽波段的白空反照率。 | 5600 | 858nm |
| Albedo_WSA_shortwave | 短波宽波段的白空反照率。 | 5600 |  |
| BRDF_Quality | 全球反照率质量。 | 5600 |  |
| Local_Solar_Noon | 当地太阳正午天顶角。 | 5600 |  |
| Percent_Inputs | 贡献于此 CMG 像元的已处理更细分辨率数据的百分比。 | 5600 |  |
| Percent_Snow | 被标记为雪的底层数据百分比。 | 5600 |  |
| BRDF_Albedo_Uncertainty | BRDF 反演信息。白空反照率的判定权重（WoD）（见 Lucht, W., & Lewis, P. (2000). Theoretical noise sensitivity of BRDF and albedo retrieval from the EOS-MODIS and MISR sensors with respect to angular sampling. International Journal of Remote Sensing, 21(1), 81-98）。WoD 给出由每次反演可用输入的角度采样导致的不确定性的度量。 | 5600 |  |

## 能拿来做什么

- 土地覆盖与植被监测
- 全球变化研究
- 遥感算法验证

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/006/MCD43C3');
```

- 数据集编号（Earth Engine ID）：`MODIS/006/MCD43C3`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD43C3

## 许可与引用

- 许可：proprietary
- 关键词：albedo, black-sky, brdf, daily, global, modis, nasa, satellite-imagery, usgs, white-sky
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD43A1.006 MODIS BRDF-Albedo Model Parameters Daily 500m [deprecated]](/pages/dba783be/)
- [MCD43A2.006 MODIS BRDF-Albedo Quality Daily 500m [deprecated]](/pages/3081c095/)
- [MCD43A3.006 MODIS Albedo Daily 500m [deprecated]](/pages/96c6f8ff/)
- [MCD43A4.006 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m [deprecated]](/pages/23f81408/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
