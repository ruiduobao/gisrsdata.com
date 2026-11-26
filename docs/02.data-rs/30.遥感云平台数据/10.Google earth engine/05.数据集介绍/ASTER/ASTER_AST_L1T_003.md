---
title: "ASTER L1T 辐射亮度影像"
date: 2026-11-03 12:00:00
permalink: /pages/b48e6fb4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aster"
  - "eos"
  - "imagery"
  - "nasa"
  - "nir"
  - "radiance"
  - "satellite-imagery"
  - "swir"
  - "terra"
  - "thermal"
  - "tir"
  - "toa"
---

# ASTER L1T 辐射亮度影像

英文原名：ASTER L1T Radiance

## 这是什么数据

注意：因 ASTER 仪器技术问题，2024 年 11 月 28 日至 2025 年 1 月 16 日之间没有数据采集。详见 USGS [公告](https://lpdaac.usgs.gov/news/aster-resumes-limited-operations/)。

ASTER（先进星载热发射与反射辐射计）是 1999 年 12 月随 NASA Terra 卫星发射的多光谱成像仪，在从可见光到热红外的 14 个波段上采集数据，单景覆盖 60 × 60 公里。本集合由 USGS 制作，装的是定标后的传感器端辐射亮度，已经过正射校正和地形校正。

并非每景都齐 14 个波段：每景实际包含哪些波段，记在资产属性 ORIGINAL_BANDS_PRESENT 里。把数字值（DN）换算成辐射亮度要用元数据里的单位换算系数，详见 [ASTER L1T 产品用户指南](https://lpdaac.usgs.gov/documents/647/AST__L1T_User_Guide_V3.pdf) 与 [ASTER L1T 产品规范](https://lpdaac.usgs.gov/documents/300/ASTER_L1T_Product_Specification.pdf)。

## 覆盖范围与时间

- 覆盖范围：全球（单景 60 × 60 公里）
- 时间范围：2000-03-04 至 2025-12-08

## 分辨率与规格

- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| B01 | VNIR 波段 1（可见光绿/黄） | 15 | 0.520-0.600&mu;m |
| B02 | VNIR 波段 2（可见光红） | 15 | 0.630-0.690&mu;m |
| B3N | VNIR 波段 3N（近红外，星下点指向） | 15 | 0.780-0.860&mu;m |
| B04 | SWIR 波段 4（短波红外） | 30 | 1.600-1.700&mu;m |
| B05 | SWIR 波段 5（短波红外） | 30 | 2.145-2.185&mu;m |
| B06 | SWIR 波段 6（短波红外） | 30 | 2.185-2.225&mu;m |
| B07 | SWIR 波段 7（短波红外） | 30 | 2.235-2.285&mu;m |
| B08 | SWIR 波段 8（短波红外） | 30 | 2.295-2.365&mu;m |
| B09 | SWIR 波段 9（短波红外） | 30 | 2.360-2.430&mu;m |
| B10 | TIR 波段 10（热红外） | 90 | 8.125-8.475&mu;m |
| B11 | TIR 波段 11（热红外） | 90 | 8.475-8.825&mu;m |
| B12 | TIR 波段 12（热红外） | 90 | 8.925-9.275&mu;m |
| B13 | TIR 波段 13（热红外） | 90 | 10.250-10.950&mu;m |
| B14 | TIR 波段 14（热红外） | 90 | 10.950-11.650&mu;m |

## 能拿来做什么

- 可见光、近红外、短波红外与热红外的多光谱分析
- 用热红外波段做地表温度与热异常研究
- 用短波红外波段做地质与矿物填图

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('ASTER/AST_L1T_003');
```

- 数据集编号（Earth Engine ID）：`ASTER/AST_L1T_003`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/ASTER_AST_L1T_003
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/72/AST_L1T_ATBD.pdf)
* [User's Guide](https://lpdaac.usgs.gov/documents/647/AST__L1T_User_Guide_V3.pdf)
* [ASTER Level-1T Product Specification](https://lpdaac.usgs.gov/documents/300/ASTER_L1T_Product_Specification.pdf)
* [ASTER L1T Quick Reference Guide](https://lpdaac.usgs.gov/documents/174/AST_L1T_Quick_Reference_Guide.pdf)

## 许可与引用

- 许可：proprietary
- 关键词：aster, eos, imagery, nasa, nir, radiance, satellite-imagery, swir, terra, thermal, tir, toa, usgs, vnir
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/ASTER/AST_L1T.003

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Landsat 8 二级地表反射率与地表温度数据](/pages/778e3960/)
- [协调版哨兵-2 MSI 一级 C 大气顶反射率](/pages/07bc7cbd/)
- [协调版哨兵-2 MSI 二级 A 地表反射率](/pages/0620c27d/)
- [哨兵-1 SAR GRD：C 波段地距探测（对数尺度）](/pages/5986ee6b/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
