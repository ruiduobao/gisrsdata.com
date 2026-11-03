---
title: "LHScat:A global long-term, high-resolution satellite radar backscatter datasets"
date: 2026-11-03 12:00:00
permalink: /pages/c9ede575/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "ascat"
  - "c-bands"
  - "ers"
  - "ku-band"
  - "qscat"
  - "radar"
  - "satellite-imagery"
---

# LHScat:A global long-term, high-resolution satellite radar backscatter datasets

## 数据集简介

The LHScat dataset is the first long-term (since 1992), high-resolution (∼8.9 km) 
monthly C-band satellite radar backscatter dataset over global land areas. It integrated 
signals from the European Remote Sensing satellite (ERS; 1992–2001; C-band; 5.3 GHz),
Quick Scatterometer (QSCAT, 1999–2009; Ku-band; 13.4 GHz), and the Advanced 
Scatterometer (ASCAT; since 2007; C-band; 5.255 GHz). The 6-year data gap between 
C-band ERS and ASCAT was filled by modelling a substitute C-band signal during 1999–2009 
from Ku-band QSCAT signals and climatic information. The quality of the merged radar 
signal was assessed by computing the Pearson correlation coefficient (Pearson\'s r) and root mean square error (RMSE) 
between the C-band and the corrected Ku-band signals in the overlapping years (1999–2001 and 2007–2009). 
To facilitate storage, the radar signals were scaled by a factor of 100 and converted to unsigned Int16.
For more detailed information, please refer to the paper describing LHScat dataset(https://essd.copernicus.org/articles/15/1577/2023/).

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/ee-pkurelab/assets/LHScat`
- 数据类型：影像集合（ImageCollection）
- 提供方：PKURELAB、Google Earth Engine
- 时间范围：1992-04-01 至 2021-08-31
- 空间分辨率：8900 米
- 许可：CC-BY-NC-4.0
- 关键词：ascat, c-bands, ers, ku-band, qscat, radar, satellite-imagery

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| radar_signals | Observed radar backscatter values (dB) | 8900 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('projects/ee-pkurelab/assets/LHScat');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_ee-pkurelab_assets_LHScat
- 数据引用：Tao, S., Ao, Z., Wigneron, J.-P., Saatchi, S., Ciais, P., Chave, J., Le Toan, T., Frison, P.-L., Hu, X., Chen, C., Fan, L., Wang, M., Zhu, J., Zhao, X., Li, X., Liu, X., Su, Y., Hu, T., Guo, Q., Wang, Z., Tang, Z., Liu, Y. Y., and Fang, J.: A global long-term, high-resolution satellite radar backscatter data record (1992-2022+): merging C-band ERS/ASCAT and Ku-band QSCAT, Earth Syst. Sci. Data, 15, 1577-1596, [https://doi.org/10.5194/essd-15-1577-2023](https://doi.org/10.5194/essd-15-1577-2023), 2023.
                  Tao, S., Chave, J., Frison, P.-L., Le Toan, T., Ciais, P., Fang, J., Wigneron, J.-P., Santoro, M., Yang, H., Li, X., Labrière, N., and Saatchi, S.: Increasing and widespread vulnerability of intact tropical rainforests to repeated droughts, Proc. Natl. Acad. Sci. USA, 119, e2116626119, [https://doi.org/10.1073/pnas.2116626119](https://doi.org/10.1073/pnas.2116626119), 2022.

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
