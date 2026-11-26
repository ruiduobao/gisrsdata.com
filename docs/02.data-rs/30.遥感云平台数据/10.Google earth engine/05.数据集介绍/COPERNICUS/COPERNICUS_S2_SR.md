---
title: "哨兵-2 MSI 二级 A 地表反射率（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/62853b7b/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "copernicus"
  - "esa"
  - "eu"
  - "msi"
  - "reflectance"
  - "satellite-imagery"
  - "sentinel"
  - "sr"
---

# 哨兵-2 MSI 二级 A 地表反射率（已弃用）

英文原名：Sentinel-2 MSI: MultiSpectral Instrument, Level-2A (SR) [deprecated]

## 这是什么数据

另见集合 COPERNICUS/S2_SR_HARMONIZED：它把处理基线（PROCESSING_BASELINE）为 04.00 及以上（2022-01-25 之后）的场景数值范围平移回与早期场景一致。

哨兵-2 是宽幅、高分辨率、多光谱成像任务，支撑哥白尼陆地监测研究，包括植被、土壤和水体覆盖监测，以及内陆水道和近岸区域观测。

哨兵-2 二级数据从 CDSE 下载，由 sen2cor 计算得到。注意：EE 集合中 2017–2018 年的二级覆盖尚未全球完整。资产包含 12 个 UINT16 光谱波段，表示放大 10000 倍的地表反射率（SR；与一级数据不同，没有 B10）。另有若干二级专用波段（见波段表）。细节见 [Sentinel-2 用户手册](https://sentinel.esa.int/documents/247904/685211/Sentinel-2_User_Handbook)。

QA60 是位掩膜波段，2022-01-25 之前它包含栅格化的云掩膜多边形，此后停止生产；自 2024-02-28 起，与旧版一致的 QA60 波段改由 MSK_CLASSI 云分类波段构建。更多细节[见云掩膜计算方法的完整说明](https://sentinel.esa.int/web/sentinel/technical-guides/sentinel-2-msi/level-1c/cloud-masks)。

哨兵-2 二级资产的 ID 格式如 COPERNICUS/S2_SR/20151128T002653_20151128T102149_T56MNN：第一段数字是传感日期时间，第二段是产品生成日期时间，最后 6 字符是唯一的 granule 标识、指示其 UTM 网格参考（见 [MGRS](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)）。

辅助云与云影检测的数据集见 [COPERNICUS/S2_CLOUD_PROBABILITY](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_CLOUD_PROBABILITY) 和 [GOOGLE/CLOUD_SCORE_PLUS/V1/S2_HARMONIZED](https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_CLOUD_SCORE_PLUS_V1_S2_HARMONIZED)。

哨兵-2 辐射分辨率的更多细节[见此页](https://sentinel.esa.int/web/sentinel/user-guides/sentinel-2-msi/resolutions/radiometric)。注意：本集合官方已标注弃用（deprecated），推荐使用协调版集合。

## 覆盖范围与时间

- 覆盖范围：全球陆地与近岸区域
- 时间范围：2017-03-28 至 2026-11-03

## 分辨率与规格

- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| B1 | 气溶胶 | 60 | 443.9nm (S2A) / 442.3nm (S2B) |
| B2 | 蓝 | 10 | 496.6nm (S2A) / 492.1nm (S2B) |
| B3 | 绿 | 10 | 560nm (S2A) / 559nm (S2B) |
| B4 | 红 | 10 | 664.5nm (S2A) / 665nm (S2B) |
| B5 | 红边 1 | 20 | 703.9nm (S2A) / 703.8nm (S2B) |
| B6 | 红边 2 | 20 | 740.2nm (S2A) / 739.1nm (S2B) |
| B7 | 红边 3 | 20 | 782.5nm (S2A) / 779.7nm (S2B) |
| B8 | 近红外 | 10 | 835.1nm (S2A) / 833nm (S2B) |
| B8A | 红边 4 | 20 | 864.8nm (S2A) / 864nm (S2B) |
| B9 | 水汽 | 60 | 945nm (S2A) / 943.2nm (S2B) |
| B11 | 短波红外 1 | 20 | 1613.7nm (S2A) / 1610.4nm (S2B) |
| B12 | 短波红外 2 | 20 | 2202.4nm (S2A) / 2185.7nm (S2B) |
| AOT | 气溶胶光学厚度 | 10 |  |
| WVP | 水汽压：水汽若凝结成液体并均匀铺展在整个气柱上所占的水层高度 | 10 |  |
| SCL | 场景分类图（「无数据」值 0 被掩膜） | 20 |  |
| TCI_R | 真彩色影像，红通道 | 10 |  |
| TCI_G | 真彩色影像，绿通道 | 10 |  |
| TCI_B | 真彩色影像，蓝通道 | 10 |  |
| MSK_CLDPRB | 云概率图（部分产品中缺失） | 20 |  |
| MSK_SNWPRB | 雪概率图（部分产品中缺失） | 10 |  |
| QA10 | 始终为空 | 10 |  |
| QA20 | 始终为空 | 20 |  |
| QA60 | 云掩膜。2022-01-25 至 2024-02-28（含）期间被掩膜 | 60 |  |
| MSK_CLASSI_OPAQUE | 不透明云分类波段（0=无云，1=云）。2024 年 2 月前被掩膜 | 60 |  |
| MSK_CLASSI_CIRRUS | 卷云分类波段（0=无云，1=云）。2024 年 2 月前被掩膜 | 60 |  |
| MSK_CLASSI_SNOW_ICE | 冰雪分类波段（0=无冰雪，1=冰雪）。2024 年 2 月前被掩膜 | 60 |  |

## 能拿来做什么

- 地表反射率分析（历史集合）
- 植被与土地覆盖监测
- 复现基于原始 S2_SR 的既有研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('COPERNICUS/S2_SR');
```

- 数据集编号（Earth Engine ID）：`COPERNICUS/S2_SR`
- 提供方：European Union/ESA/Copernicus、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_SR

## 许可与引用

- 许可：proprietary
- 关键词：copernicus, esa, eu, msi, reflectance, satellite-imagery, sentinel, sr
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)
- [Landsat 8 二级地表反射率与地表温度数据](/pages/778e3960/)
- [协调版哨兵-2 MSI 一级 C 大气顶反射率](/pages/07bc7cbd/)
- [协调版哨兵-2 MSI 二级 A 地表反射率](/pages/0620c27d/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
