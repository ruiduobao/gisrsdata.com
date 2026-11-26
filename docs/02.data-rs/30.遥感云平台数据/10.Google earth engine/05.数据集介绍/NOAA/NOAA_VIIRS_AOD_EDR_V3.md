---
title: "VIIRS 气溶胶光学厚度与气溶胶粒径环境数据记录 V3"
date: 2026-11-03 12:00:00
permalink: /pages/616d9456/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aerosol"
  - "aod"
  - "atmosphere"
  - "noaa"
  - "viirs"
---

# VIIRS 气溶胶光学厚度与气溶胶粒径环境数据记录 V3

英文原名：VIIRS Aerosol Optical Depth and Aerosol Particle Size EDRs V3

## 这是什么数据

VIIRS 气溶胶光学厚度（AOD）与气溶胶粒径（APS）环境数据记录（EDR）产品，提供从可见红外成像辐射计套件（VIIRS）传感器反演的气溶胶性质。主要产品是 550 nm 的 AOD，另有其他传感器通道的反演以及海洋上的埃格斯特朗指数。空间分辨率为 750 米。

我们使用 [GDAL 库](https://github.com/google/earthengine-catalog/blob/main/pipelines/viirs_aod.py)将源栅格投影到北向经纬（EPSG:4326）网格。85°S 以南与 85°N 以北的数据被排除，以避免在为边界过滤生成资产足迹时出现几何问题。

更多细节与原始数据获取见：

## 覆盖范围与时间

- 覆盖范围：空间：全球（85°S–85°N）；时间：2022 年至今；分辨率：750 米。
- 时间范围：2022-10-29 至 2026-10-30

## 分辨率与规格

- 空间分辨率：约 750 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| AOD550 | 550 nm 反演气溶胶光学厚度 | 750 |  |
| AOD_channel_M1 | 传感器通道 M1 反演的气溶胶光学厚度 | 750 | 0.412 &mu;m |
| AOD_channel_M2 | 传感器通道 M2 反演的气溶胶光学厚度 | 750 | 0.445 &mu;m |
| AOD_channel_M3 | 传感器通道 M3 反演的气溶胶光学厚度 | 750 | 0.488 &mu;m |
| AOD_channel_M4 | 传感器通道 M4 反演的气溶胶光学厚度 | 750 | 0.555 &mu;m |
| AOD_channel_M5 | 传感器通道 M5 反演的气溶胶光学厚度 | 750 | 0.672 &mu;m |
| AOD_channel_M6 | 传感器通道 M6 反演的气溶胶光学厚度 | 750 | 0.746 &mu;m |
| AOD_channel_M7 | 传感器通道 M7 反演的气溶胶光学厚度 | 750 | 0.865 &mu;m |
| AOD_channel_M8 | 传感器通道 M8 反演的气溶胶光学厚度 | 750 | 1.24 &mu;m |
| AOD_channel_M9 | 传感器通道 M9 反演的气溶胶光学厚度 | 750 | 1.378 &mu;m |
| AOD_channel_M10 | 传感器通道 M10 反演的气溶胶光学厚度 | 750 | 1.61 &mu;m |
| AOD_channel_M11 | 传感器通道 M11 反演的气溶胶光学厚度 | 750 | 2.25 &mu;m |
| AngsExp1 | 由海洋上 M4 与 M7 的 AOD 计算的埃格斯特朗指数（ABI 用 M3 与 M7） | 750 |  |
| AngsExp2 | 由海洋上 M7 与 M10 的 AOD 计算的埃格斯特朗指数 | 750 |  |
| SfcRefl_M1 | 传感器通道 M1 的陆地与海洋地表反射率 | 750 | 0.412 &mu;m |
| SfcRefl_M2 | 传感器通道 M2 的陆地与海洋地表反射率 | 750 | 0.445 &mu;m |
| SfcRefl_M3 | 传感器通道 M3 的陆地与海洋地表反射率 | 750 | 0.488 &mu;m |
| SfcRefl_M4 | 传感器通道 M4 的陆地与海洋地表反射率 | 750 | 0.555 &mu;m |
| SfcRefl_M5 | 传感器通道 M5 的陆地与海洋地表反射率 | 750 | 0.672 &mu;m |
| SfcRefl_M6 | 传感器通道 M6 的陆地与海洋地表反射率 | 750 | 0.746 &mu;m |
| SfcRefl_M7 | 传感器通道 M7 的陆地与海洋地表反射率 | 750 | 0.865 &mu;m |
| SfcRefl_M8 | 传感器通道 M8 的陆地与海洋地表反射率 | 750 | 1.24 &mu;m |
| SfcRefl_M9 | 传感器通道 M9 的陆地与海洋地表反射率 | 750 | 1.378 &mu;m |
| SfcRefl_M10 | 传感器通道 M10 的陆地与海洋地表反射率 | 750 | 1.61 &mu;m |
| SfcRefl_M11 | 传感器通道 M11 的陆地与海洋地表反射率 | 750 | 2.25 &mu;m |
| SpaStddev | M1/M11 大气顶反射率的 3×3 标准差（陆地/海洋） | 750 |  |
| Residual | 最佳解的反演残差 | 750 |  |
| AOD550LndMdl_Dust | 沙尘陆地气溶胶模型在 550 nm 的反演 AOD | 750 |  |
| AOD550LndMdl_Generic | 通用陆地气溶胶模型在 550 nm 的反演 AOD（原文末尾带杂散引号） | 750 |  |
| AOD550LndMdl_Urban | 城市陆地气溶胶模型在 550 nm 的反演 AOD | 750 |  |
| AOD550LndMdl_Smoke | 烟雾陆地气溶胶模型在 550 nm 的反演 AOD | 750 |  |
| ResLndMdl_Dust | 沙尘陆地气溶胶模型的反演残差 | 750 |  |
| ResLndMdl_Generic | 通用陆地气溶胶模型的反演残差 | 750 |  |
| ResLndMdl_Urban | 城市陆地气溶胶模型的反演残差 | 750 |  |
| ResLndMdl_Smoke | 烟雾陆地气溶胶模型的反演残差 | 750 |  |
| FineMdlIdx | 海洋上细模态气溶胶模型指数 | 750 |  |
| CoarseMdlIdx | 海洋上粗模态气溶胶模型指数 | 750 |  |
| FineModWgt | 海洋上细模态权重 | 750 |  |
| AerMdl | 反演过程中从预设模型中选取的气溶胶模型：0：海洋气溶胶；1：陆上沙尘；2：陆上通用气溶胶；3：陆上城市气溶胶；4：陆上烟雾 | 750 |  |
| QCAll | 气溶胶光学厚度反演的总体质量标志：0：高质量；1：中等质量；2：低质量；3：无反演 | 750 |  |
| QCAE | 海洋上埃格斯特朗指数反演的总体质量标志：0：高质量；1：中等质量；2：低质量；3：无反演 | 750 |  |
| QCExtn | 描述外部（输入）掩膜的质量标志。对每个「是/否」位，「是」表示存在该掩膜。 | 750 |  |
| QCTest | 描述可能影响或妨碍 AOD 计算的特定条件内部检验的质量标志。对每个「是/否」位，「是」表示存在被检验的特征。 | 750 |  |
| QCInput | 描述影响或妨碍 AOD 计算的不良输入类型的质量标志。对每个「是/否」位，「是」表示输入存在指定问题。（原文此处为双句点） | 750 |  |
| QCPath | 描述反演路径/方案的质量标志。对每个「是/否」位，「是」表示存在该特征。 | 750 |  |
| QCRet | 描述数据反演产生的问题的质量标志，这些问题可能影响或妨碍 AOD 计算。对每个「是/否」位，「是」表示反演因该原因失败。 | 750 |  |

## 能拿来做什么

- 做区域与全球气溶胶光学厚度监测，支撑空气质量与气候研究。
- 分析沙尘、烟雾等气溶胶事件的输送过程。
- 验证化学输送模式的气溶胶模拟。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/VIIRS/AOD_EDR/V3');
```

- 数据集编号（Earth Engine ID）：`NOAA/VIIRS/AOD_EDR/V3`
- 提供方：NOAA、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_AOD_EDR_V3
* [JPSS Aerosols page](https://www.star.nesdis.noaa.gov/jpss/aerosols.php)
* [Algorithm Theoretical Basis Document](https://www.star.nesdis.noaa.gov/jpss/documents/ATBD/ATBD_EPS_Aerosol_AOD_v3.4.pdf)
* [Google Cloud JPSS main page](https://console.cloud.google.com/marketplace/product/noaa-public/noaa-jpss)

## 许可与引用

- 许可：proprietary
- 关键词：aerosol, aod, atmosphere, noaa, viirs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [AERDB_D3_VIIRS_NOAA20.002：VIIRS/NOAA-20 深蓝气溶胶光学厚度逐日三级全球 1.0 度格网](/pages/fa53b9c1/)
- [AERDB_D3_VIIRS_SNPP.002：VIIRS/SNPP 深蓝气溶胶光学厚度逐日三级全球 1.0 度格网](/pages/64c851e2/)
- [ERA5 逐小时数据 — ECMWF 气候再分析](/pages/2de85afd/)
- [ERA5 逐小时气压层数据 — ECMWF 气候再分析](/pages/e4d910e9/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
