---
title: "MCD18A1.062 地表辐射日/3 小时"
date: 2026-11-03 12:00:00
permalink: /pages/50554e4e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "par"
  - "radiation"
  - "weather-and-climate"
---

# MCD18A1.062 地表辐射日/3 小时

英文原名：MCD18A1.062 Surface Radiation Daily/3-Hour

## 这是什么数据

MCD18A1 版本 6.2 是一个中分辨率成像光谱仪（MODIS）Terra 与 Aqua 组合下行短波辐射（DSR）格网三级产品，每日以 1 公里像元分辨率生产，并提供每 3 小时的 DSR 估计。DSR 是短波光谱（300–4,000 纳米）内陆地表面的入射太阳辐射，是陆面模型中处理各种科学与应用问题的重要变量。MCD18 产品基于一种原型算法，该算法使用 MODIS 数据的多时相特征推导地表反射率，然后使用查找表（LUT）方法计算入射 DSR。LUT 考虑了在各种照明/观测几何下不同类型的气溶胶与云负荷。全球 DSR 产品由 MODIS 与静止卫星数据生成。有关创建该数据所用方法的更多细节，见[算法理论基础文档](https://lpdaac.usgs.gov/documents/106/MCD18_ATBD.pdf)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2026 年；分辨率：1 公里。
- 时间范围：2000-03-03 至 2026-08-01

## 分辨率与规格

- 空间分辨率：约 1,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| DSR | MODIS 过境时的瞬时总 DSR。 | 1000 |  |
| Direct | MODIS 过境时的瞬时直接 DSR。 | 1000 |  |
| Diffuse | MODIS 过境时的瞬时漫射 DSR。 | 1000 |  |
| GMT_0000_DSR | GMT 00:00 的总DSR。 | 1000 |  |
| GMT_0300_DSR | GMT 03:00 的总DSR。 | 1000 |  |
| GMT_0600_DSR | GMT 06:00 的总DSR。 | 1000 |  |
| GMT_0900_DSR | GMT 09:00 的总DSR。 | 1000 |  |
| GMT_1200_DSR | GMT 12:00 的总DSR。 | 1000 |  |
| GMT_1500_DSR | GMT 15:00 的总DSR。 | 1000 |  |
| GMT_1800_DSR | GMT 18:00 的总DSR。 | 1000 |  |
| GMT_2100_DSR | GMT 21:00 的总DSR。 | 1000 |  |
| DSR_Quality | 质量标志。 | 1000 |  |

## 能拿来做什么

- 地表辐射收支研究
- 陆面过程建模
- 太阳能资源评估

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/062/MCD18A1');
```

- 数据集编号（Earth Engine ID）：`MODIS/062/MCD18A1`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_062_MCD18A1

## 许可与引用

- 许可：proprietary
- 关键词：par, radiation, weather-and-climate
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD18A1.062

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD18C2.062 Photosynthetically Active Radiation Daily 3-Hour](/pages/e72cb414/)
- [ERA5 月聚合数据 — ECMWF 气候再分析](/pages/87085b9b/)
- [ERA5 逐日聚合数据](/pages/9ae9975a/)
- [GCOM-C/SGLI 三级地表温度产品（V1）](/pages/a4b5eab0/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
