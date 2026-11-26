---
title: "哨兵-1 SAR GRD：C 波段地距探测（对数尺度）"
date: 2026-11-03 12:00:00
permalink: /pages/5986ee6b/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "backscatter"
  - "copernicus"
  - "esa"
  - "eu"
  - "polarization"
  - "radar"
  - "sar"
  - "satellite-imagery"
  - "sentinel"
---

# 哨兵-1 SAR GRD：C 波段地距探测（对数尺度）

英文原名：Sentinel-1 SAR GRD: C-band Synthetic Aperture Radar Ground Range Detected, log scaling

## 这是什么数据

哨兵-1 任务提供双极化 C 波段合成孔径雷达（SAR）仪器的数据，频率 5.405 GHz（C 波段）。本集合收录 S1 地距探测（GRD）场景，用 Sentinel-1 工具箱处理成定标、正射校正的产品。集合每日更新，新资产在可用后两天内入库。

本集合包含全部 GRD 场景。每景有 3 种分辨率（10、25 或 40 米）之一、4 种波段组合（对应场景极化）之一和 3 种仪器模式之一。在镶嵌场景下使用本集合，通常需要先筛选到同质的波段与参数组合，细节见[这篇文章](https://developers.google.com/earth-engine/sentinel1)。每景包含 4 种可能极化波段中的 1 或 2 个：单波段 VV、单波段 HH、双波段 VV+VH、双波段 HH+HV——其中 VV 是单同极化（垂直发射/垂直接收），HH 是单同极化（水平发射/水平接收），VV+VH 是双波段交叉极化（垂直发射/水平接收），HH+HV 是双波段交叉极化（水平发射/垂直接收）。

每景还包含一个 angle 波段，给出每个点相对椭球的近似入射角（度）。该波段由每个资产附带的 geolocationGridPoint 网格字段的 incidenceAngle 属性插值生成。

每景都用 [Sentinel-1 工具箱](https://earth.esa.int/eogateway/tools/sentinel-1-toolbox) 做了预处理，步骤为：热噪声去除；辐射定标；地形校正（用 SRTM 30，纬度大于 60 度、SRTM 无覆盖的区域用 ASTER DEM）。地形校正后的值经对数变换（10*log10(x)）转成分贝。预处理步骤的更多信息见 [Sentinel-1 预处理文章](https://developers.google.com/earth-engine/sentinel1)。哨兵-1 影像的使用建议见 [Guido Lemoine 的 SAR 基础教程](https://developers.google.com/earth-engine/tutorials/community/sar-basics) 和 [Mort Canty 的 SAR 变化检测教程](https://developers.google.com/earth-engine/tutorials/community/detecting-changes-in-sentinel-1-imagery-pt-1)。

本集合是即时计算的。如果想用更新更快的原始功率值底层集合，见 COPERNICUS/S1_GRD_FLOAT。想自己处理的用户可以获取未处理的 S1 GRD 场景（即从 ESA 下载的原样）：数据在 [gs://earth-engine-public-requester-pays/sentinel1/GRD](https://console.cloud.google.com/storage/browser/earth-engine-public-requester-pays/sentinel1/GRD)，对应的轨道文件（恢复轨道与精密轨道）在 [gs://earth-engine-public-requester-pays/sentinel1/AUX](https://console.cloud.google.com/storage/browser/earth-engine-public-requester-pays/sentinel1/AUX)。未处理数据还被索引在 BigQuery 表 `earth-engine-public-data.geo_index.sentinel1_index` 中，每行对应一个 S1 GRD 产品，含产品标识、数据获取标识、采集时间、经纬度范围，以及产品数据在 `gs://earth-engine-public-requester-pays/sentinel1/GRD` 中的路径。

## 覆盖范围与时间

- 覆盖范围：全球陆地与近岸区域
- 时间范围：2014-10-03 至 2026-11-03
- 更新节奏：每日更新，新资产在可用后两天内入库

## 分辨率与规格

- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| HH | 单同极化：水平发射/水平接收 | 10 |  |
| HV | 双波段交叉极化：水平发射/垂直接收 | 10 |  |
| VV | 单同极化：垂直发射/垂直接收 | 10 |  |
| VH | 双波段交叉极化：垂直发射/水平接收 | 10 |  |
| angle | 相对椭球的近似入射角 | 20000 |  |

## 能拿来做什么

- 用雷达后向散射做洪水制图与水体检测
- 不受云和昼夜影响的土地覆盖与变化检测
- 海冰、溢油与船舶监测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('COPERNICUS/S1_GRD');
```

- 数据集编号（Earth Engine ID）：`COPERNICUS/S1_GRD`
- 提供方：European Union/ESA/Copernicus、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S1_GRD

## 许可与引用

- 许可：proprietary
- 关键词：backscatter, copernicus, esa, eu, polarization, radar, sar, satellite-imagery, sentinel
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)
- [Landsat 8 二级地表反射率与地表温度数据](/pages/778e3960/)
- [协调版哨兵-2 MSI 一级 C 大气顶反射率](/pages/07bc7cbd/)
- [协调版哨兵-2 MSI 二级 A 地表反射率](/pages/0620c27d/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
