/*** Autogenerated by WIDL 5.0.2 from ../../include/wsdxml.idl - Do not edit ***/

#ifdef _WIN32
#ifndef __REQUIRED_RPCNDR_H_VERSION__
#define __REQUIRED_RPCNDR_H_VERSION__ 475
#endif
#include <rpc.h>
#include <rpcndr.h>
#endif

#ifndef COM_NO_WINDOWS_H
#include <windows.h>
#include <ole2.h>
#endif

#ifndef __wsdxml_h__
#define __wsdxml_h__

/* Forward declarations */

#ifndef __IWSDXMLContext_FWD_DEFINED__
#define __IWSDXMLContext_FWD_DEFINED__
typedef interface IWSDXMLContext IWSDXMLContext;
#ifdef __cplusplus
interface IWSDXMLContext;
#endif /* __cplusplus */
#endif

/* Headers for imported files */

#include <oaidl.h>
#include <ocidl.h>
#include <wsdxmldom.h>

#ifdef __cplusplus
extern "C" {
#endif

#ifndef __IWSDXMLContext_FWD_DEFINED__
#define __IWSDXMLContext_FWD_DEFINED__
typedef interface IWSDXMLContext IWSDXMLContext;
#ifdef __cplusplus
interface IWSDXMLContext;
#endif /* __cplusplus */
#endif

/*****************************************************************************
 * IWSDXMLContext interface
 */
#ifndef __IWSDXMLContext_INTERFACE_DEFINED__
#define __IWSDXMLContext_INTERFACE_DEFINED__

DEFINE_GUID(IID_IWSDXMLContext, 0x75d8f3ee, 0x3e5a, 0x43b4, 0xa1,0x5a, 0xbc,0xf6,0x88,0x74,0x60,0xc0);
#if defined(__cplusplus) && !defined(CINTERFACE)
MIDL_INTERFACE("75d8f3ee-3e5a-43b4-a15a-bcf6887460c0")
IWSDXMLContext : public IUnknown
{
    virtual HRESULT STDMETHODCALLTYPE AddNamespace(
        LPCWSTR pszUri,
        LPCWSTR pszSuggestedPrefix,
        WSDXML_NAMESPACE **ppNamespace) = 0;

    virtual HRESULT STDMETHODCALLTYPE AddNameToNamespace(
        LPCWSTR pszUri,
        LPCWSTR pszName,
        WSDXML_NAME **ppName) = 0;

    virtual HRESULT STDMETHODCALLTYPE SetNamespaces(
        const PCWSDXML_NAMESPACE *pNamespaces,
        WORD wNamespacesCount,
        BYTE bLayerNumber) = 0;

    virtual HRESULT STDMETHODCALLTYPE SetTypes(
        const PCWSDXML_TYPE *pTypes,
        DWORD dwTypesCount,
        BYTE bLayerNumber) = 0;

};
#ifdef __CRT_UUID_DECL
__CRT_UUID_DECL(IWSDXMLContext, 0x75d8f3ee, 0x3e5a, 0x43b4, 0xa1,0x5a, 0xbc,0xf6,0x88,0x74,0x60,0xc0)
#endif
#else
typedef struct IWSDXMLContextVtbl {
    BEGIN_INTERFACE

    /*** IUnknown methods ***/
    HRESULT (STDMETHODCALLTYPE *QueryInterface)(
        IWSDXMLContext *This,
        REFIID riid,
        void **ppvObject);

    ULONG (STDMETHODCALLTYPE *AddRef)(
        IWSDXMLContext *This);

    ULONG (STDMETHODCALLTYPE *Release)(
        IWSDXMLContext *This);

    /*** IWSDXMLContext methods ***/
    HRESULT (STDMETHODCALLTYPE *AddNamespace)(
        IWSDXMLContext *This,
        LPCWSTR pszUri,
        LPCWSTR pszSuggestedPrefix,
        WSDXML_NAMESPACE **ppNamespace);

    HRESULT (STDMETHODCALLTYPE *AddNameToNamespace)(
        IWSDXMLContext *This,
        LPCWSTR pszUri,
        LPCWSTR pszName,
        WSDXML_NAME **ppName);

    HRESULT (STDMETHODCALLTYPE *SetNamespaces)(
        IWSDXMLContext *This,
        const PCWSDXML_NAMESPACE *pNamespaces,
        WORD wNamespacesCount,
        BYTE bLayerNumber);

    HRESULT (STDMETHODCALLTYPE *SetTypes)(
        IWSDXMLContext *This,
        const PCWSDXML_TYPE *pTypes,
        DWORD dwTypesCount,
        BYTE bLayerNumber);

    END_INTERFACE
} IWSDXMLContextVtbl;

interface IWSDXMLContext {
    CONST_VTBL IWSDXMLContextVtbl* lpVtbl;
};

#ifdef COBJMACROS
#ifndef WIDL_C_INLINE_WRAPPERS
/*** IUnknown methods ***/
#define IWSDXMLContext_QueryInterface(This,riid,ppvObject) (This)->lpVtbl->QueryInterface(This,riid,ppvObject)
#define IWSDXMLContext_AddRef(This) (This)->lpVtbl->AddRef(This)
#define IWSDXMLContext_Release(This) (This)->lpVtbl->Release(This)
/*** IWSDXMLContext methods ***/
#define IWSDXMLContext_AddNamespace(This,pszUri,pszSuggestedPrefix,ppNamespace) (This)->lpVtbl->AddNamespace(This,pszUri,pszSuggestedPrefix,ppNamespace)
#define IWSDXMLContext_AddNameToNamespace(This,pszUri,pszName,ppName) (This)->lpVtbl->AddNameToNamespace(This,pszUri,pszName,ppName)
#define IWSDXMLContext_SetNamespaces(This,pNamespaces,wNamespacesCount,bLayerNumber) (This)->lpVtbl->SetNamespaces(This,pNamespaces,wNamespacesCount,bLayerNumber)
#define IWSDXMLContext_SetTypes(This,pTypes,dwTypesCount,bLayerNumber) (This)->lpVtbl->SetTypes(This,pTypes,dwTypesCount,bLayerNumber)
#else
/*** IUnknown methods ***/
static FORCEINLINE HRESULT IWSDXMLContext_QueryInterface(IWSDXMLContext* This,REFIID riid,void **ppvObject) {
    return This->lpVtbl->QueryInterface(This,riid,ppvObject);
}
static FORCEINLINE ULONG IWSDXMLContext_AddRef(IWSDXMLContext* This) {
    return This->lpVtbl->AddRef(This);
}
static FORCEINLINE ULONG IWSDXMLContext_Release(IWSDXMLContext* This) {
    return This->lpVtbl->Release(This);
}
/*** IWSDXMLContext methods ***/
static FORCEINLINE HRESULT IWSDXMLContext_AddNamespace(IWSDXMLContext* This,LPCWSTR pszUri,LPCWSTR pszSuggestedPrefix,WSDXML_NAMESPACE **ppNamespace) {
    return This->lpVtbl->AddNamespace(This,pszUri,pszSuggestedPrefix,ppNamespace);
}
static FORCEINLINE HRESULT IWSDXMLContext_AddNameToNamespace(IWSDXMLContext* This,LPCWSTR pszUri,LPCWSTR pszName,WSDXML_NAME **ppName) {
    return This->lpVtbl->AddNameToNamespace(This,pszUri,pszName,ppName);
}
static FORCEINLINE HRESULT IWSDXMLContext_SetNamespaces(IWSDXMLContext* This,const PCWSDXML_NAMESPACE *pNamespaces,WORD wNamespacesCount,BYTE bLayerNumber) {
    return This->lpVtbl->SetNamespaces(This,pNamespaces,wNamespacesCount,bLayerNumber);
}
static FORCEINLINE HRESULT IWSDXMLContext_SetTypes(IWSDXMLContext* This,const PCWSDXML_TYPE *pTypes,DWORD dwTypesCount,BYTE bLayerNumber) {
    return This->lpVtbl->SetTypes(This,pTypes,dwTypesCount,bLayerNumber);
}
#endif
#endif

#endif


#endif  /* __IWSDXMLContext_INTERFACE_DEFINED__ */

HRESULT WINAPI WSDXMLCreateContext(IWSDXMLContext **ppContext);
/* Begin additional prototypes for all interfaces */


/* End additional prototypes */

#ifdef __cplusplus
}
#endif

#endif /* __wsdxml_h__ */
